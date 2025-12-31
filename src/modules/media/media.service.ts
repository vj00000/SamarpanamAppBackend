import { Injectable, Logger } from '@nestjs/common';
import ffmpeg from 'fluent-ffmpeg';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class MediaService {
    private readonly logger = new Logger(MediaService.name);

    async handleUpload(file: Express.Multer.File) {
        const isMov = file.mimetype.includes('quicktime') || file.originalname.toLowerCase().endsWith('.mov');

        if (isMov) {
            this.logger.log(`Processing .mov file: ${file.filename}. Converting to .mp4...`);
            try {
                const mp4Path = await this.convertToMp4(file.path);
                const mp4Filename = path.basename(mp4Path);

                // Remove the original .mov file to save space
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }

                return {
                    fileName: mp4Filename,
                    url: `http://localhost:8080/public/videos/${mp4Filename}`,
                    mimetype: 'video/mp4',
                    originalFormat: 'mov',
                    converted: true,
                };
            } catch (err) {
                this.logger.error(`Failed to convert video: ${err.message}`);
                return {
                    fileName: file.filename,
                    url: `http://localhost:8080/public/videos/${file.filename}`,
                    size: file.size,
                    mimetype: file.mimetype,
                    converted: false,
                    error: 'Conversion failed, returning original file',
                };
            }
        }

        return {
            fileName: file.filename,
            url: `http://localhost:8080/public/videos/${file.filename}`,
            size: file.size,
            mimetype: file.mimetype,
            converted: false,
        };
    }

    private convertToMp4(inputPath: string): Promise<string> {
        const outputPath = inputPath.replace(path.extname(inputPath), '.mp4');

        return new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .output(outputPath)
                .videoCodec('libx264')
                .audioCodec('aac')
                .on('end', () => resolve(outputPath))
                .on('error', (err) => reject(err))
                .run();
        });
    }
}

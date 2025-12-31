export declare class MediaService {
    private readonly logger;
    handleUpload(file: Express.Multer.File): Promise<{
        fileName: string;
        url: string;
        mimetype: string;
        originalFormat: string;
        converted: boolean;
        size?: undefined;
        error?: undefined;
    } | {
        fileName: string;
        url: string;
        size: number;
        mimetype: string;
        converted: boolean;
        error: string;
        originalFormat?: undefined;
    } | {
        fileName: string;
        url: string;
        size: number;
        mimetype: string;
        converted: boolean;
        originalFormat?: undefined;
        error?: undefined;
    }>;
    private convertToMp4;
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MediaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let MediaService = MediaService_1 = class MediaService {
    logger = new common_1.Logger(MediaService_1.name);
    async handleUpload(file) {
        const isMov = file.mimetype.includes('quicktime') || file.originalname.toLowerCase().endsWith('.mov');
        if (isMov) {
            this.logger.log(`Processing .mov file: ${file.filename}. Converting to .mp4...`);
            try {
                const mp4Path = await this.convertToMp4(file.path);
                const mp4Filename = path.basename(mp4Path);
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
            }
            catch (err) {
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
    convertToMp4(inputPath) {
        const outputPath = inputPath.replace(path.extname(inputPath), '.mp4');
        return new Promise((resolve, reject) => {
            (0, fluent_ffmpeg_1.default)(inputPath)
                .output(outputPath)
                .videoCodec('libx264')
                .audioCodec('aac')
                .on('end', () => resolve(outputPath))
                .on('error', (err) => reject(err))
                .run();
        });
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = MediaService_1 = __decorate([
    (0, common_1.Injectable)()
], MediaService);
//# sourceMappingURL=media.service.js.map
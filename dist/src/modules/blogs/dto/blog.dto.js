"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDto = exports.BlogDetailDto = exports.BlogContentBlockDto = exports.BlogSummaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BlogSummaryDto {
    id;
    title;
    excerpt;
    image;
    readTime;
}
exports.BlogSummaryDto = BlogSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogSummaryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogSummaryDto.prototype, "excerpt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogSummaryDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogSummaryDto.prototype, "readTime", void 0);
class BlogContentBlockDto {
    type;
    text;
    items;
    url;
}
exports.BlogContentBlockDto = BlogContentBlockDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['paragraph', 'heading', 'list', 'quote', 'image', 'video'] }),
    __metadata("design:type", String)
], BlogContentBlockDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BlogContentBlockDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: [String] }),
    __metadata("design:type", Array)
], BlogContentBlockDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BlogContentBlockDto.prototype, "url", void 0);
class BlogDetailDto {
    id;
    title;
    author;
    date;
    readTime;
    image;
    tags;
    content;
}
exports.BlogDetailDto = BlogDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "readTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BlogDetailDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], BlogDetailDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BlogContentBlockDto] }),
    __metadata("design:type", Array)
], BlogDetailDto.prototype, "content", void 0);
class BlogDto extends BlogDetailDto {
}
exports.BlogDto = BlogDto;
//# sourceMappingURL=blog.dto.js.map
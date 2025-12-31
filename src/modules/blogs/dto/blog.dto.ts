import { ApiProperty } from '@nestjs/swagger';

export class BlogSummaryDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    excerpt: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    readTime: string;
}

export class BlogContentBlockDto {
    @ApiProperty({ enum: ['paragraph', 'heading', 'list', 'quote', 'image', 'video'] })
    type: string;
    @ApiProperty({ required: false })
    text?: string;
    @ApiProperty({ required: false, type: [String] })
    items?: string[];
    @ApiProperty({ required: false })
    url?: string;
}

export class BlogDetailDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    author: string;
    @ApiProperty()
    date: string;
    @ApiProperty()
    readTime: string;
    @ApiProperty()
    image: string;
    @ApiProperty({ type: [String] })
    tags: string[];
    @ApiProperty({ type: [BlogContentBlockDto] })
    content: BlogContentBlockDto[];
}

export class BlogDto extends BlogDetailDto { }

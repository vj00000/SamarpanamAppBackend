export declare class BlogSummaryDto {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
}
export declare class BlogContentBlockDto {
    type: string;
    text?: string;
    items?: string[];
    url?: string;
}
export declare class BlogDetailDto {
    id: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    content: BlogContentBlockDto[];
}
export declare class BlogDto extends BlogDetailDto {
}

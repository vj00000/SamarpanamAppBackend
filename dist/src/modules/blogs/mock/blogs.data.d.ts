export declare const BLOGS: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
}[];
export declare const BLOG_DETAILS: {
    '1': {
        id: string;
        title: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        tags: string[];
        content: ({
            type: string;
            text: string;
            items?: undefined;
        } | {
            type: string;
            items: string[];
            text?: undefined;
        })[];
    };
};

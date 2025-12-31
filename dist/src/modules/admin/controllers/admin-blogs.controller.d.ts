import { AdminBlogsService } from '../services/admin-blogs.service';
import { CreateBlogDto } from '../../blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '../../blogs/dto/update-blog.dto';
export declare class AdminBlogsController {
    private readonly adminService;
    constructor(adminService: AdminBlogsService);
    findAll(): Promise<{
        id: string;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: string;
        date: string;
        readTime: string;
        excerpt: string;
        tags: string;
        content: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: string;
        date: string;
        readTime: string;
        excerpt: string;
        tags: string;
        content: string;
    } | null>;
    create(dto: CreateBlogDto): Promise<{
        id: string;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: string;
        date: string;
        readTime: string;
        excerpt: string;
        tags: string;
        content: string;
    }>;
    update(id: string, dto: UpdateBlogDto): Promise<{
        id: string;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: string;
        date: string;
        readTime: string;
        excerpt: string;
        tags: string;
        content: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: string;
        date: string;
        readTime: string;
        excerpt: string;
        tags: string;
        content: string;
    }>;
}

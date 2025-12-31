import { BlogsService } from './blogs.service';
import { BlogSummaryDto, BlogDetailDto } from './dto/blog.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    findAll(): Promise<BlogSummaryDto[]>;
    findOne(id: string): Promise<BlogDetailDto>;
}

import { PrismaService } from '../common/prisma/prisma.service';
import { BlogSummaryDto, BlogDetailDto } from './dto/blog.dto';
export declare class BlogsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<BlogSummaryDto[]>;
    findOne(id: string): Promise<BlogDetailDto>;
}

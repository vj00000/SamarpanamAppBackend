import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { BlogSummaryDto, BlogDetailDto, BlogDto } from './dto/blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<BlogSummaryDto[]> {

        return this.prisma.blog.findMany({
            select: {
                id: true,
                title: true,
                excerpt: true,
                image: true,
                readTime: true,
            },
        });
    }

    async findOne(id: string): Promise<BlogDetailDto> {
        const blog = await this.prisma.blog.findUnique({
            where: { id },
        });

        if (!blog) {
            throw new NotFoundException(`Blog with ID ${id} not found`);
        }

        return {
            id: blog.id,
            title: blog.title,
            author: blog.author,
            date: blog.date,
            readTime: blog.readTime,
            image: blog.image,
            tags: JSON.parse(blog.tags),
            content: JSON.parse(blog.content),
        };
    }
}

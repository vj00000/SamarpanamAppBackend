import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { BlogSummaryDto, BlogDetailDto } from './dto/blog.dto';

@ApiTags('Blogs')
@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all blogs' })
    @ApiResponse({ status: 200, type: [BlogSummaryDto] })
    async findAll(): Promise<BlogSummaryDto[]> {
        return this.blogsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get full blog content' })
    @ApiResponse({ status: 200, type: BlogDetailDto })
    @ApiResponse({ status: 404, description: 'Blog not found' })
    async findOne(@Param('id') id: string): Promise<BlogDetailDto> {
        return this.blogsService.findOne(id);
    }
}

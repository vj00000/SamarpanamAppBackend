import { Controller, Post, Delete, Body, Param, Patch, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminBlogsService } from '../services/admin-blogs.service';
import { CreateBlogDto } from '../../blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '../../blogs/dto/update-blog.dto';
import { BlogDto } from '../../blogs/dto/blog.dto';

@ApiTags('Admin / Blogs')
@Controller('admin/blogs')
export class AdminBlogsController {
    constructor(private readonly adminService: AdminBlogsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all blogs (Admin view)' })
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single blog by ID' })
    async findOne(@Param('id') id: string) {
        return this.adminService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new blog post' })
    @ApiResponse({ status: 201, type: BlogDto })
    async create(@Body() dto: CreateBlogDto) {
        return this.adminService.create(dto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a blog post' })
    async update(@Param('id') id: string, @Body() dto: UpdateBlogDto) {
        return this.adminService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a blog post' })
    async remove(@Param('id') id: string) {
        return this.adminService.remove(id);
    }
}

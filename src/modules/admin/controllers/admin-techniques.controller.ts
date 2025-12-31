import { Controller, Post, Delete, Body, Param, Patch, Get, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AdminTechniquesService } from '../services/admin-techniques.service';
import { CreateTechniqueDto } from '../../techniques/dto/create-technique.dto';
import { UpdateTechniqueDto } from '../../techniques/dto/update-technique.dto';
import { TechniqueDetailDto } from '../../techniques/dto/technique.dto';


@ApiTags('Admin / Techniques')
@Controller('admin/techniques')
export class AdminTechniquesController {
    constructor(private readonly adminService: AdminTechniquesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all techniques (Admin view)' })
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single technique by ID' })
    async findOne(@Param('id') id: string) {
        return this.adminService.findOne(id);
    }

    @Post('with-video')
    @ApiOperation({ summary: 'Create a new technique and upload its video simultaneously' })
    @ApiConsumes('multipart/form-data')
    @ApiResponse({ status: 201, type: TechniqueDetailDto })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                subtitle: { type: 'string' },
                difficulty: { type: 'string' },
                duration: { type: 'string' },
                image: { type: 'string' },
                description: { type: 'string' },
                categoryId: { type: 'string' },
                isFeatured: { type: 'boolean' },
                steps: { type: 'array', items: { type: 'string' } },
                benefits: { type: 'array', items: { type: 'string' } },
                precautions: { type: 'array', items: { type: 'string' } },
                video: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('video', {
        storage: diskStorage({
            destination: './uploads/videos',
            filename: (req, file, cb) => {
                const techniqueId = req.body.id;
                if (techniqueId) {
                    return cb(null, `${techniqueId}${extname(file.originalname)}`);
                }
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    async createWithVideo(
        @Body() createTechniqueDto: CreateTechniqueDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 50 * 1024 * 1024 }),
                ],
                fileIsRequired: false,
            }),
        ) file?: Express.Multer.File,
    ): Promise<any> {
        return this.adminService.create(createTechniqueDto, file);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a technique' })
    async update(@Param('id') id: string, @Body() updateTechniqueDto: UpdateTechniqueDto) {
        return this.adminService.update(id, updateTechniqueDto);
    }

    @Delete(':id')

    @ApiOperation({ summary: 'Delete a technique' })
    async remove(@Param('id') id: string) {
        return this.adminService.remove(id);
    }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LogSessionDto {
    @ApiProperty({ example: 'fire-gaze' })
    @IsString()
    @IsNotEmpty()
    techniqueId: string;

    @ApiProperty({ example: '5 min' })
    @IsString()
    @IsNotEmpty()
    duration: string;

    @ApiProperty({ example: 'user-id-123', required: false })
    @IsString()
    userId?: string;
}

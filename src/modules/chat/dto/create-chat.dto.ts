
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
    @ApiProperty({ example: 'How do I focus my mind?', description: 'User message' })
    @IsString()
    @IsNotEmpty()
    message: string;
}

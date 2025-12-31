
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Chat with Maharshi Patanjali' })
    @ApiResponse({ status: 200, description: 'Successful response' })
    async chat(@Body() createChatDto: CreateChatDto) {
        return this.chatService.chat(createChatDto);
    }
}

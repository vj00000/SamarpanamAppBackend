import { OnModuleInit } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
export declare class ChatService implements OnModuleInit {
    private readonly logger;
    private history;
    private readonly MAX_HISTORY;
    private currentPdfUri;
    private readonly MODEL_NAME;
    private readonly SYSTEM_PROMPT;
    onModuleInit(): Promise<void>;
    initializeKnowledgeBase(): Promise<void>;
    chat(createChatDto: CreateChatDto): Promise<{
        reply: string;
    }>;
    clearHistory(): {
        message: string;
    };
}

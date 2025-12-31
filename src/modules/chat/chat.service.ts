
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { GoogleGenerativeAI, Part } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ChatService implements OnModuleInit {
    private readonly logger = new Logger(ChatService.name);
    private history: { role: 'user' | 'model'; parts: Part[] }[] = [];
    private readonly MAX_HISTORY = 20;
    private currentPdfUri: string | null = null;

    // User requested model
    private readonly MODEL_NAME = 'gemma-3-12b-it';

    private readonly SYSTEM_PROMPT = `You are Maharshi Patanjali, the ancient sage who compiled the Yoga Sutras. 
  Your goal is to guide the user on the path of Yoga (Ashtanga Yoga) and wellness.
  - Respond with wisdom, clarity, and compassion.
  - Use metaphors from nature and references to the Yoga Sutras where appropriate.
  - Keep your answers concise, profound, and practical.
  - Address the user as "seeker".
  `;

    async onModuleInit() {
        await this.initializeKnowledgeBase();
    }

    // Initialize Knowledge Base from local file
    async initializeKnowledgeBase() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            this.logger.error('GEMINI_API_KEY not set. Cannot upload knowledge base.');
            return;
        }

        // Fix: Use process.cwd() to target src directory directly in dev environment
        const filePath = path.join(process.cwd(), 'src/modules/chat/resources/yogasutrasofpatanjali.pdf');

        if (!fs.existsSync(filePath)) {
            this.logger.warn(`Knowledge base file not found at: ${filePath}. Proceeding without PDF context.`);
            return;
        }

        try {
            // Note: Even if we upload, Gemma might not support 'fileData' in chat.
            // We keep this for future switching to 'gemini-1.5'
            const fileManager = new GoogleAIFileManager(apiKey);
            this.logger.log(`Uploading knowledge base: ${filePath}`);

            const uploadResponse = await fileManager.uploadFile(filePath, {
                mimeType: 'application/pdf',
                displayName: 'Yoga Sutras of Patanjali',
            });

            this.currentPdfUri = uploadResponse.file.uri;
            this.logger.log(`Knowledge base uploaded successfully! URI: ${this.currentPdfUri}`);

        } catch (error) {
            this.logger.error('Failed to upload knowledge base', error);
        }
    }

    async chat(createChatDto: CreateChatDto) {
        const userMessage = createChatDto.message;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            this.logger.error('GEMINI_API_KEY is not set');
            return { reply: "The cosmic energy (API Key) is missing from my environment." };
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);

            // Note: systemInstruction removed for Gemma as it throws "Developer instruction is not enabled"
            const model = genAI.getGenerativeModel({
                model: this.MODEL_NAME,
                // systemInstruction: this.SYSTEM_PROMPT 
            });

            const chatSession = model.startChat({
                history: this.history,
            });

            let messageText = userMessage;

            // Prepend SYSTEM PROMPT to the first user message
            if (this.history.length === 0) {
                messageText = `${this.SYSTEM_PROMPT}\n\nUser Question: ${userMessage}`;
            }

            const msgParts: Part[] = [{ text: messageText }];

            // Inject PDF URI if available and supported
            if (this.currentPdfUri && this.history.length === 0 && this.MODEL_NAME.includes('gemini')) {
                msgParts.push({
                    fileData: {
                        mimeType: 'application/pdf',
                        fileUri: this.currentPdfUri
                    }
                });
                this.logger.debug('Injecting PDF knowledge into context');
            } else if (this.currentPdfUri && this.MODEL_NAME.includes('gemma') && this.history.length === 0) {
                this.logger.warn(`Skipping PDF injection for model ${this.MODEL_NAME} (likely text-only).`);
            }

            const result = await chatSession.sendMessage(msgParts);
            const replyText = result.response.text();

            // Update local history
            this.history.push({
                role: 'user',
                parts: msgParts
            });

            this.history.push({
                role: 'model',
                parts: [{ text: replyText }]
            });

            // Trim history logic
            if (this.history.length > this.MAX_HISTORY) {
                this.history = this.history.slice(this.history.length - this.MAX_HISTORY);
            }

            return { reply: replyText };

        } catch (error) {
            this.logger.error(`Error calling Gemini API (${this.MODEL_NAME})`, error);

            if (error.message?.includes('404')) {
                return { reply: `I cannot reach the model "${this.MODEL_NAME}". It might not be available in your region or API version.` };
            }
            if (error.message?.includes('400')) {
                // If we get a 400 Bad Request, it might be due to parameters gemma doesn't like.
                return { reply: `The model finds my request malformed. (Error: ${error.message})` };
            }

            return { reply: "A disturbance in the ether prevents me from answering." };
        }
    }

    clearHistory() {
        this.history = [];
        return { message: 'History cleared' };
    }
}

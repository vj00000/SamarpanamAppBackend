"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var ChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
const server_1 = require("@google/generative-ai/server");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let ChatService = ChatService_1 = class ChatService {
    logger = new common_1.Logger(ChatService_1.name);
    history = [];
    MAX_HISTORY = 20;
    currentPdfUri = null;
    MODEL_NAME = 'gemma-3-12b-it';
    SYSTEM_PROMPT = `You are Maharshi Patanjali, the ancient sage who compiled the Yoga Sutras. 
  Your goal is to guide the user on the path of Yoga (Ashtanga Yoga) and wellness.
  - Respond with wisdom, clarity, and compassion.
  - Use metaphors from nature and references to the Yoga Sutras where appropriate.
  - Keep your answers concise, profound, and practical.
  - Address the user as "seeker".
  `;
    async onModuleInit() {
        await this.initializeKnowledgeBase();
    }
    async initializeKnowledgeBase() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            this.logger.error('GEMINI_API_KEY not set. Cannot upload knowledge base.');
            return;
        }
        const filePath = path.join(process.cwd(), 'src/modules/chat/resources/yogasutrasofpatanjali.pdf');
        if (!fs.existsSync(filePath)) {
            this.logger.warn(`Knowledge base file not found at: ${filePath}. Proceeding without PDF context.`);
            return;
        }
        try {
            const fileManager = new server_1.GoogleAIFileManager(apiKey);
            this.logger.log(`Uploading knowledge base: ${filePath}`);
            const uploadResponse = await fileManager.uploadFile(filePath, {
                mimeType: 'application/pdf',
                displayName: 'Yoga Sutras of Patanjali',
            });
            this.currentPdfUri = uploadResponse.file.uri;
            this.logger.log(`Knowledge base uploaded successfully! URI: ${this.currentPdfUri}`);
        }
        catch (error) {
            this.logger.error('Failed to upload knowledge base', error);
        }
    }
    async chat(createChatDto) {
        const userMessage = createChatDto.message;
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            this.logger.error('GEMINI_API_KEY is not set');
            return { reply: "The cosmic energy (API Key) is missing from my environment." };
        }
        try {
            const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: this.MODEL_NAME,
            });
            const chatSession = model.startChat({
                history: this.history,
            });
            let messageText = userMessage;
            if (this.history.length === 0) {
                messageText = `${this.SYSTEM_PROMPT}\n\nUser Question: ${userMessage}`;
            }
            const msgParts = [{ text: messageText }];
            if (this.currentPdfUri && this.history.length === 0 && this.MODEL_NAME.includes('gemini')) {
                msgParts.push({
                    fileData: {
                        mimeType: 'application/pdf',
                        fileUri: this.currentPdfUri
                    }
                });
                this.logger.debug('Injecting PDF knowledge into context');
            }
            else if (this.currentPdfUri && this.MODEL_NAME.includes('gemma') && this.history.length === 0) {
                this.logger.warn(`Skipping PDF injection for model ${this.MODEL_NAME} (likely text-only).`);
            }
            const result = await chatSession.sendMessage(msgParts);
            const replyText = result.response.text();
            this.history.push({
                role: 'user',
                parts: msgParts
            });
            this.history.push({
                role: 'model',
                parts: [{ text: replyText }]
            });
            if (this.history.length > this.MAX_HISTORY) {
                this.history = this.history.slice(this.history.length - this.MAX_HISTORY);
            }
            return { reply: replyText };
        }
        catch (error) {
            this.logger.error(`Error calling Gemini API (${this.MODEL_NAME})`, error);
            if (error.message?.includes('404')) {
                return { reply: `I cannot reach the model "${this.MODEL_NAME}". It might not be available in your region or API version.` };
            }
            if (error.message?.includes('400')) {
                return { reply: `The model finds my request malformed. (Error: ${error.message})` };
            }
            return { reply: "A disturbance in the ether prevents me from answering." };
        }
    }
    clearHistory() {
        this.history = [];
        return { message: 'History cleared' };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map
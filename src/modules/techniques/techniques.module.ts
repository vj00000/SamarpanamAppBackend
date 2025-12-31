import { Module } from '@nestjs/common';
import { TechniquesController } from './techniques.controller';
import { TechniquesService } from './techniques.service';
import { MediaModule } from '../media/media.module';

@Module({
    imports: [MediaModule],
    controllers: [TechniquesController],
    providers: [TechniquesService],
    exports: [TechniquesService],
})
export class TechniquesModule { }

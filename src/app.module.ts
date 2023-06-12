import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './provider/provider.module';

import condfiguration from './config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [condfiguration],
        }),
        ProviderModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

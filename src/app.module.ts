import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './provider/provider.module';
import { configuration } from './config/configuration';
import { SellerModule } from './seller/seller.module';
import { BranchofficeModule } from './branchoffice/branchoffice.module';
import { AccountModule } from './account/account.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            autoLoadEntities: true,
            synchronize: configuration.IS_DEV,
            logging: configuration.IS_DEV
        }),
        ProviderModule,
        SellerModule,
        BranchofficeModule,
        AccountModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

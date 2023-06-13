import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountModule } from 'src/account/account.module';

import { Customer } from './customer.entity';

@Module({
    imports: [
        AccountModule,
        TypeOrmModule.forFeature([Customer])
    ]
})
export class CustomerModule {}

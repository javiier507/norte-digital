import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountModule } from 'src/account/account.module';

import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';

@Module({
    imports: [AccountModule, TypeOrmModule.forFeature([Customer])],
    providers: [CustomerRepository, CustomerService],
    controllers: [CustomerController],
    exports: [CustomerRepository],
})
export class CustomerModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountService } from './account.service';
import { Account } from './account.entity';
import { AccountAddress } from './address.entity';

@Module({
    providers: [AccountService],
    imports: [TypeOrmModule.forFeature([Account, AccountAddress])],
})
export class AccountModule {}

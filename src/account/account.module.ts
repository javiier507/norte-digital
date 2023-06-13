import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountService } from './account.service';
import { Account, AccountAddress } from './account.entity';

@Module({
    providers: [AccountService],
    imports: [TypeOrmModule.forFeature([Account, AccountAddress])],
})
export class AccountModule {}

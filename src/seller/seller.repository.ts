import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Seller } from './seller.entity';
import { Account, AccountAddress } from 'src/account/account.entity';

@Injectable()
export class SellerRepository {
    constructor(@InjectRepository(Seller) private readonly repository: Repository<Seller>) {}

    async findAll(): Promise<Array<Seller>> {
        return this.repository.find();
    }

    async exist(accountId: number): Promise<boolean> {
        return (await this.repository.countBy({ accountId })) > 0;
    }

    async createAccountAddress(accountAdress: AccountAddress): Promise<AccountAddress> {
        return this.repository.manager.save(accountAdress);
    }

    async createAccount(account: Account): Promise<Account> {
        return this.repository.manager.save(account);
    }

    async create(seller: Seller): Promise<Seller> {
        return this.repository.save(seller);
    }
}

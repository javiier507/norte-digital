import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

import { Account } from 'src/account/account.entity';

@Entity()
export class Customer {
    @PrimaryColumn()
    accountId: number;

    @OneToOne(() => Account, {eager: true})
    @JoinColumn()
    account: Account;
}

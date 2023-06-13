import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import { Account } from 'src/account/account.entity';

@Entity()
export class Seller {
    @PrimaryColumn()
    accountId: number;

    @OneToOne(() => Account)
    @JoinColumn()
    account: Account;

    @Column({ length: 25 })
    birthdate: string;

    @Column({ length: 100, unique: true })
    email: string;
}

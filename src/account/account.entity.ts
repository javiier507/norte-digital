import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { AccountAddress } from './address.entity';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 50})
    rut: string;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    lastname: string;

    @OneToOne(() => AccountAddress)
    @JoinColumn()
    address: AccountAddress;

    @Column({length: 25})
    telephone: string;
}
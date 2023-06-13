import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { SellerAddress } from './address.entity';

@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 50})
    rut: string;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    lastname: string;

    @OneToOne(() => SellerAddress)
    @JoinColumn()
    address: SellerAddress;

    @Column({length: 25})
    telephone: string;

    @Column({length: 25})
    birthdate: string;

    @Column({length: 100, unique: true})
    email: string;
}
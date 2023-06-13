import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SellerAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    street: string;

    @Column()
    number: number;

    @Column({length: 50})
    neighborhood: string;

    @Column({length: 25})
    city: string;
}
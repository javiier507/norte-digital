import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    telephone: string;

    @Column()
    birthdate: string;

    @Column()
    email: string;
}
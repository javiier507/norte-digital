import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provider {
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

    @Column({name: 'web_page', nullable: true})
    webPage: string;
}
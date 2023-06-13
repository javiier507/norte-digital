import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { ProviderAddress } from './address.entity';

@Entity()
export class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    rut: string;

    @Column({ length: 100 })
    name: string;

    @OneToOne(() => ProviderAddress)
    @JoinColumn()
    address: ProviderAddress;

    @Column({ length: 25 })
    telephone: string;

    @Column({ nullable: true })
    webPage: string;
}

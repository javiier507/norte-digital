import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class ProviderAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    street: string;

    @Column()
    number: number;

    @Column({ length: 50 })
    neighborhood: string;

    @Column({ length: 25 })
    city: string;
}

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

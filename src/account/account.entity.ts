import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class AccountAddress {
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
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    rut: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    lastname: string;

    @OneToOne(() => AccountAddress)
    @JoinColumn()
    address: AccountAddress;

    @Column({ length: 25 })
    telephone: string;
}

import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { BranchOffice } from "src/branchoffice/branchoffice.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, unique: true})
    name: string;

    @Column({type: 'double'})
    price: number;

    @Column({type: 'integer'})
    stock: number;

    @OneToOne(() => BranchOffice)
    @JoinColumn()
    branchOffice: BranchOffice;
}
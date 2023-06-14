import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Seller } from "src/seller/seller.entity";
import { Customer } from "src/customer/customer.entity";
import { BranchOffice } from "src/branchoffice/branchoffice.entity";
import { Product } from "src/product/product.entity";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date: string;

    @ManyToOne(() => Seller)
    @JoinColumn()
    seller: Seller;

    @ManyToOne(() => Customer)
    @JoinColumn()
    customer: Customer;

    @ManyToOne(() => BranchOffice)
    @JoinColumn()
    branchOffice: BranchOffice;

    @Column({type: 'double'})
    total: number;
}

@Entity()
export class SaleItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'integer'})
    quantity: number;

    @ManyToOne(() => Product)
    @JoinColumn()
    product: Product;
}
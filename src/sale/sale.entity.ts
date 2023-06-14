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

    @Column({name: 'sellerAccountId'})
    sellerId: number;

    @ManyToOne(() => Seller)
    @JoinColumn()
    seller: Seller;

    @Column({name: 'customerAccountId'})
    customerId: number;

    @ManyToOne(() => Customer)
    @JoinColumn()
    customer: Customer;

    @Column({name: 'branchOfficeId'})
    branchOfficeId: number;

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

    @Column({name: 'productId'})
    productId: number;

    @ManyToOne(() => Product)
    @JoinColumn()
    product: Product;
}
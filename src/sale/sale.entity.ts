import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Seller, {eager: true})
    seller: Seller;

    @Column({name: 'customerAccountId'})
    customerId: number;

    @ManyToOne(() => Customer, {eager: true})
    customer: Customer;

    @Column({name: 'branchOfficeId'})
    branchOfficeId: number;

    @ManyToOne(() => BranchOffice, {eager: true})
    branchOffice: BranchOffice;

    @Column({type: 'double'})
    total: number;

    @OneToMany(() => SaleItem, (x) => x.sale, {eager: true})
    items: SaleItem[];
}

@Entity()
export class SaleItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'integer'})
    quantity: number;

    @Column({name: 'saleId'})
    saleId: number;

    @ManyToOne(() => Sale)
    sale: Sale;

    @Column({name: 'productId'})
    productId: number;

    @ManyToOne(() => Product, {eager: true})
    product: Product;
}
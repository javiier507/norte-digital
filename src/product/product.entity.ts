import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BranchOffice } from 'src/branchoffice/branchoffice.entity';
import { Provider } from 'src/provider/provider.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: false })
    name: string;

    @Column({ type: 'double' })
    price: number;

    @Column({ type: 'integer' })
    stock: number;

    @ManyToOne(() => Provider)
    @JoinColumn()
    provider: Provider;

    @ManyToOne(() => BranchOffice, { nullable: true })
    @JoinColumn()
    branchOffice: BranchOffice;
}

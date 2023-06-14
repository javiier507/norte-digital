import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BranchOffice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 75, unique: false })
    country: string;
}

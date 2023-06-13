import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BranchOffice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25, unique: true })
    country: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class Seller {
    @ApiProperty({ description: 'ID Vendedor', nullable: false, minimum: 1 })
    id: number;
}

export class Customer {
    @ApiProperty({ description: 'ID Cliente', nullable: false, minimum: 1 })
    id: number;
}

export class BranchOffice {
    @ApiProperty({ description: 'ID Sucursal', nullable: false, minimum: 1 })
    id: number;
}

export class Product {
    @ApiProperty({ description: 'ID Producto', nullable: false, minimum: 1 })
    id: number;
}

export class SaleItem {
    @ApiProperty({ description: 'Cantidad de productos a vender', nullable: false, minimum: 1 })
    quantity: number;
    @ApiProperty({ description: 'Producto', nullable: false, type: Product })
    product: Product;
}

export class Sale {
    @ApiProperty({
        description: 'Fecha de la venta en formato ISO (YYYY-MM-DD)',
        nullable: false,
        minimum: 10,
        maximum: 10,
        example: '2023-01-15',
    })
    date: string;
    @ApiProperty({ description: 'Venededor', nullable: false, type: Seller })
    seller: Seller;
    @ApiProperty({ description: 'Cliente', nullable: false, type: Customer })
    customer: Customer;
    @ApiProperty({ description: 'Sucursal', nullable: false, type: BranchOffice })
    branchOffice: BranchOffice;
    @ApiProperty({
        description: 'Lista de productos a vender',
        nullable: true,
        type: [SaleItem],
        minimum: 1,
    })
    items: SaleItem[];
}

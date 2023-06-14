import { ApiProperty } from "@nestjs/swagger";

export class Seller {
    @ApiProperty({description: 'RUT del vendedor', nullable: false})
    rut: string;

    @ApiProperty({description: 'Nombre del vendedor', nullable: false})
    name: string;

    @ApiProperty({description: 'Apellido del vendedor', nullable: false})
    lastname: string;

    @ApiProperty({description: 'Telefono del vendedor', nullable: false})
    telephone: string;

    @ApiProperty({description: 'Fecha de nacimiento del vendedor', nullable: false})
    birthdate: string;

    @ApiProperty({description: 'Correo del vendedor', nullable: false})
    email: string;   
}

export class Customer {
    @ApiProperty({description: 'RUT del cliente', nullable: false})
    rut: string;

    @ApiProperty({description: 'Nombre del cliente', nullable: false})
    name: string;

    @ApiProperty({description: 'Apellido del cliente', nullable: false})
    lastname: string;

    @ApiProperty({description: 'Telefono del cliente', nullable: false})
    telephone: string;
}

export class BranchOffice {
    @ApiProperty({description: 'Pais de la sucursal', nullable: false})
    country: string;
}

export class Product {
    @ApiProperty({description: 'Nombre del Producto', nullable: false})
    name: string;
    
    @ApiProperty({description: 'Precio del Producto', nullable: false})
    price: number;

    @ApiProperty({description: 'Stock del Producto', nullable: false})
    stock: number;
}

export class SaleItem {
    @ApiProperty({description: 'Cantidad de productos a vender', nullable: false})
    quantity: number;
    
    @ApiProperty({description: 'Producto', nullable: false, type: Product})
    product: Product;
}

export class Sale {
    @ApiProperty({description: 'Fecha de la venta', nullable: false})
    date: string;
    
    @ApiProperty({description: 'Venededor', nullable: false, type: Seller})
    seller: Seller;
    
    @ApiProperty({description: 'Cliente', nullable: false, type: Customer})
    customer: Customer;
    
    @ApiProperty({description: 'Sucursal', nullable: false, type: BranchOffice})
    branchOffice: BranchOffice;
    
    @ApiProperty({description: 'Lista de productos vendidos', nullable: true, type: [SaleItem]})
    items: SaleItem[];
    
    total: number;
}
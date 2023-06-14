import { Injectable } from '@nestjs/common';
import { SaleRepository } from './sale.repository';

@Injectable()
export class SaleService {
    constructor(private readonly repository: SaleRepository){}
}

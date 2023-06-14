import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Sale } from './sale.entity';

@Injectable()
export class SaleRepository {
    constructor(@InjectRepository(Sale) private readonly repository: Repository<Sale>) {}


}

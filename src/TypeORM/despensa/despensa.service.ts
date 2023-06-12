import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Despensa, DespensaUPDT } from './despensa.entity';


@Injectable()
export class DespensaService {
  constructor(
    @InjectRepository(Despensa)
    private despensaRepository: Repository<Despensa>,
  ) {}

  findAll(): Promise<Despensa[]> {
    return this.despensaRepository.find();
  }

  findOne(codigo: number): Promise<Despensa | null> {
    return this.despensaRepository.findOneBy({ codigo });
  }

  async remove(codigo: number): Promise<void> {
    await this.despensaRepository.delete( codigo );
  }
}
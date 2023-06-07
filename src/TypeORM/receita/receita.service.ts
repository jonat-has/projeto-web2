import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receita } from './receita.entity';



@Injectable()
export class ReceitaService {
  constructor(
    @InjectRepository(Receita)
    private receitaRepository: Repository<Receita>,
  ) {}

  findAll(): Promise<Receita[]> {
    return this.receitaRepository.find();
  }

  findOne(codigo: number): Promise<Receita | null> {
    return this.receitaRepository.findOneBy({ codigo });
  }

  async remove(codigo: number): Promise<void> {
    await this.receitaRepository.delete( codigo );
  }
}
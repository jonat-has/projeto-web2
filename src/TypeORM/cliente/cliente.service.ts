import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  findOne(codigo: number): Promise<Cliente | null> {
    return this.clientesRepository.findOneBy({ codigo });
  }

  async remove(codigo: number): Promise<void> {
    await this.clientesRepository.delete( codigo );
  }
}
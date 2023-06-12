import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente, createCliente, updateCliente } from './cliente.entity';



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

  async deleteById(codigo: number): Promise< void > {
    await this.clientesRepository.delete(codigo);
  }

  async create(data: createCliente): Promise< Cliente > {
    const entity = this.clientesRepository.create(data);
    return this.clientesRepository.save(entity);
  }

  async update(codigo: number,data: updateCliente): Promise< void >{
    await this.clientesRepository.update( codigo,data )
  }
}
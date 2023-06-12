/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredientes, IngredientesDTO } from './ingredientes.entity';


@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingredientes)
    private ingredientesRepository: Repository<Ingredientes>,
  ) {}

  findAll(): Promise<Ingredientes[]> {
    return this.ingredientesRepository.find();
  }

  findOne(codigo: number): Promise<Ingredientes | null> {
    return this.ingredientesRepository.findOneBy({ codigo });
  }

 
  }


}
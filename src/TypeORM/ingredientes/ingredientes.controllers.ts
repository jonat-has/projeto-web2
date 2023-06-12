/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { Ingredientes, IngredientesDTO } from './ingredientes.entity';


@Controller('ingredientes')
export class IngredienteController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Get()
  async findAll(): Promise<Ingredientes[]> {
    return this.ingredientesService.findAll();
  }

 

}
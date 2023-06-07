import { Controller, Get } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { Ingredientes } from './ingredientes.entity';


@Controller('ingredientes')
export class IngredienteController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Get()
  async findAll(): Promise<Ingredientes[]> {
    return this.ingredientesService.findAll();
  }
}

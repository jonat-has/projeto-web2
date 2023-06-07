import { Controller, Get } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { Receita } from './receita.entity';

@Controller('receitas')
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Get()
  async findAll(): Promise<Receita[]> {
    return this.receitaService.findAll();
  }
}

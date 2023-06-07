import { Controller, Get } from '@nestjs/common';
import { DespensaService } from './despensa.service'
import { Despensa } from './despensa.entity';

@Controller('despensa')
export class DespensaController {
  constructor(private readonly despensaService: DespensaService) {}

  @Get()
  async findAll(): Promise<Despensa[]> {
    return this.despensaService.findAll();
  }
}

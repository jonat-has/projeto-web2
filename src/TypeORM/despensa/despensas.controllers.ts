import { Controller, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
import { DespensaService } from './despensa.service'
import { Despensa, DespensaUPDT } from './despensa.entity';

@Controller('despensa')
export class DespensaController {
  constructor(private readonly despensaService: DespensaService) {}

  @Get()
  async findAll(): Promise<Despensa[]> {
    return this.despensaService.findAll();
  }

  
}

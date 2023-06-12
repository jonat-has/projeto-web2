import { Controller, Get, Delete, Param, Post, Body, Put, } from '@nestjs/common';
import { ClientesService } from './cliente.service';
import { Cliente, createCliente, updateCliente } from './cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClientesService) {}

  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get('show/:codigo')
  async findOne(@Param('codigo') codigo: number): Promise< Cliente > {
    return this.clienteService.findOne(codigo);
  }


  @Post('add')
  async create(@Body() data: createCliente): Promise< Cliente > {
    return this.clienteService.create(data);
  }

  @Delete('remove/:codigo')
  async delete(@Param('codigo') codigo: number): Promise<void> {
    await this.clienteService.deleteById(codigo);
  }

  @Put('att/:codigo')
  async update(@Param('codigo') codigo: number, @Body() Date: updateCliente): Promise< void >{
    return this.clienteService.update( codigo, Date );
  }

}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredientes } from './ingredientes.entity';
import { IngredientesService } from './ingredientes.service';
import { IngredienteController } from './ingredientes.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredientes])],
  providers: [IngredientesService],
  controllers: [IngredienteController],
})
export class IngredientesModule {}
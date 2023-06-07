import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receita.entity';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Receita])],
  providers: [ReceitaService],
  controllers: [ReceitaController],
})
export class ReceitaModule {}
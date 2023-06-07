import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './TypeORM/cliente/cliente.entity';
import { ClientesModule } from './TypeORM/cliente/clientes.module';
import { DespensaModule } from './TypeORM/despensa/despensa.module';
import { Despensa } from './TypeORM/despensa/despensa.entity';
import { Ingredientes } from './TypeORM/ingredientes/ingredientes.entity';
import { IngredientesModule } from './TypeORM/ingredientes/ingredientes.module';
import { Receita } from './TypeORM/receita/receita.entity';
import { ReceitaModule } from './TypeORM/receita/receita.module';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '8591',
    database: 'projetoweb2',
    entities: [ Cliente,Despensa,Ingredientes,Receita ],
    synchronize: false,
  }), ClientesModule,DespensaModule,IngredientesModule,ReceitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

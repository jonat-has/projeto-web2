import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Despensa {
  @PrimaryGeneratedColumn()
  codigo: number;

 @Column()
 codigo_cliente: number;
}
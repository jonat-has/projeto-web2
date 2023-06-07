import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  usuario: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  email: string;
}
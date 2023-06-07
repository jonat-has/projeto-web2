import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column()
  imagem: string;

  @Column()
  tempo_de_preparo: number;

  @Column()
  resumo: string;

  @Column()
  instrucoes: string;
}
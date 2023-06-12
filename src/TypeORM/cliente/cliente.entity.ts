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

export class createCliente {
  readonly 'codigo': number;
  readonly 'usuario': string;
  readonly 'senha': string;
  readonly 'nome': string;
  readonly 'email': string;
}

export class updateCliente {
  readonly 'usuario': string;
  readonly 'senha': string;
  readonly 'nome': string;
  readonly 'email': string;
}





import { Professor } from '../core/models/professor.model';

export const PROFESSORES_MOCK: Professor[] = [
  {
    idprofessor: 1,
    nome: 'João da Silva',
    cpf: '123.456.789-00',
    status: true,
    datacriacao: new Date('2023-01-01'),
    dataalteracao: new Date('2023-01-10'),
    usucriacao: 'admin',
    usualteracao: 'admin',
  },
  {
    idprofessor: 2,
    nome: 'Maria Oliveira',
    cpf: '987.654.321-00',
    status: false,
    datacriacao: new Date('2023-02-05'),
    dataalteracao: new Date('2023-02-20'),
    usucriacao: 'admin',
    usualteracao: 'admin',
  },
  {
    idprofessor: 3,
    nome: 'Carlos Mendes',
    cpf: '456.789.123-99',
    status: true,
    datacriacao: new Date('2023-03-15'),
    dataalteracao: new Date('2023-04-01'),
    usucriacao: 'admin',
    usualteracao: 'admin',
  }
];

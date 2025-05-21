import { Injectable } from '@angular/core';
import { Professor } from '../core/models/professor.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfessorService {
  private professores: Professor[] = [
    {
      idprofessor: 1,
      nome: 'Ana Paula',
      cpf: '123.456.789-00',
      status: true,
      datacriacao: new Date(),
      usucriacao: 'admin',
    },
    {
      idprofessor: 2,
      nome: 'Carlos Silva',
      cpf: '987.654.321-00',
      status: false,
      datacriacao: new Date(),
      usucriacao: 'admin',
    },
  ];

  listar(): Observable<Professor[]> {
    return of(this.professores);
  }

  salvar(professor: Professor): Observable<Professor> {
    professor.idprofessor = this.professores.length + 1;
    professor.datacriacao = new Date();
    professor.usucriacao = 'mockUser';
    this.professores.push(professor);
    return of(professor);
  }
}

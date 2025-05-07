import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../../core/models/aluno.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(
    private alunoService: AlunoService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.carregarAluno();
  }

  carregarAluno(): void {
    this.spinner.show();
    setTimeout(() => {
      this.alunos = this.alunoService.listar();
      this.spinner.hide();
    }, 1000); // Simula um atraso para visualização do spinner
  }
}

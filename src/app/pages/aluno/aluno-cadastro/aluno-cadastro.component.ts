import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Aluno } from '../../core/models/aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {
   aluno = new Aluno();
  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    console.log(form);
  }

  cadastroAluno(form: NgForm) {
    console.log(this.aluno);
    
    // Chama o serviço (não retorna nada, então sem .then)
    this.alunoService.adicionar(this.aluno);
    
    // Exibe mensagem de sucesso
    this.messageService.add({
      severity: 'success',
      summary: 'Aluno',
      detail: 'Cadastrado com sucesso!'
    });
  
    // Redireciona para a lista de alunos
    this.router.navigate(['/alunos']);
  }
  
}

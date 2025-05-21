import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Professor } from '../../core/models/professor.model';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html'
})
export class ProfessorCadastroComponent {
  professor: Professor = {};
  salvando = false;
  editando = false;

  constructor(private service: ProfessorService, private router: Router) {}

  salvar(form: NgForm) {
    this.salvando = true;
    this.service.salvar(this.professor).subscribe(() => {
      this.salvando = false;
      form.reset();
      this.router.navigate(['/professores']);
    });
  }
}

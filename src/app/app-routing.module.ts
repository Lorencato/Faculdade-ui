import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alunos',  // ou 'disciplinas', se quiser deixar disciplinas como padrão
    pathMatch: 'full'
  },
  
 
  {
    path: 'disciplinas',
    loadChildren: () => 
      import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
  },

  {
    path: 'alunos',
    loadChildren: () => import('./pages/aluno/aluno.module').then(m => m.AlunoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

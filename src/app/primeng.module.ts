import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
@NgModule({

  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    TableModule
  ]
})
export class PrimengModule { }

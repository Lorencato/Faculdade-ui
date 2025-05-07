import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisciplinaModule } from './pages/disciplina/disciplina.module';
import { PrimengModule } from './primeng.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './pages/core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    DisciplinaModule,
    NgxSpinnerModule,
    CoreModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

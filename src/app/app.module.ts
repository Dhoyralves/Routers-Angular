import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPagComponent } from './primeira-pag/primeira-pag.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPagComponent,
    SegundaPagComponent,
    PaginaNaoEncontradaComponent,
    PaginaComParametrosComponent,
    PaginaProtegidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //acrescentado do modulo
    FormsModule //se vc for usar a diretiva [(ngModel)], tem que ter esse FormsModule importado aqui, para o two-way data bilding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

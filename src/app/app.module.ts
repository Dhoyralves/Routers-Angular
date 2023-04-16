import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPagComponent } from './primeira-pag/primeira-pag.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPagComponent,
    SegundaPagComponent,
    PaginaNaoEncontradaComponent,
    PaginaComParametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //acrescentado do modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

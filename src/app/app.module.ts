import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPagComponent } from './primeira-pag/primeira-pag.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPagComponent,
    SegundaPagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //acrescentado do modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

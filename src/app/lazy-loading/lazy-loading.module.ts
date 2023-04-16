import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';


@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }


//normalmente quando a pagina é pequena, ao abrir o desenvolvedor no navegador e na aba rede(network) vai carregar tudo, mesmo abrindo outra pagina do mesmo site, ou seja, ele baixa tudo de uma vez... esse baixa tudo é o modo Eager-loading(tudo que compoe a aplicação é baixado no momento que abro o meu site)
//mas conforme a aplicação cresce, o tempo de carregamento aumenta tambem, ai para nao ter esse problema de esperar todo site carregar para abrir a aplicação, usa-se o lazy-loading (baixar as informações daquela pagina somente quando elas forem necessarias)
//para criar isso no Angular precisamos criar um novo module
//a diferença de um module para um component, é que no module vai conter inumeros componentes, e isso facilita em separar a aplicação em diversos modules(exemplo. module de produtos, que separa todos componentes dessa funcionalidade, posso dividir tambem atraves das minhas regras de negocio)

//no terminal: ng g module lazy-loading(posso mudar esse nome) --route= (são as rotas que vou adcionar) lazy-loading (vai ser a rota que eu vou acessar para utilizar o module) --module=(estou atrelando ao module principal da url)app.module (nome do module principal que estou atrelando o lazy-loading)
//fica assim: ng g module lazy-loading --route=lazy-loading --module=app.module
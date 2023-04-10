import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPagComponent } from './primeira-pag/primeira-pag.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';

const routes: Routes = [
    {path: "primeira-pag", component: PrimeiraPagComponent}, //no navegador use depois de localhost e da porta o /primeira-pag //path significa o caminho
    {path:"segunda-pag", component: SegundaPagComponent}, //sempre tenho que acrescentar essas coisas aqui
    {path:"", redirectTo: "primeira-pag", pathMatch: "full"}// isso é para fazer o redirecionamento de paginas // esse full serve pra quando eu não colocar nenhuma informação na url, ou seja, ela for vazia
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule] //adicione isso viu
})

export class AppRoutingModule{}

//a biblioteca para trabalhar com o roteamento do angular é o comando npm i @angular/router
// o modulo para fazer esse rotemento é ng generate module nomeModule 
//para rodar a aplicação direto use ng server --open para ele colocar o servidor no ar
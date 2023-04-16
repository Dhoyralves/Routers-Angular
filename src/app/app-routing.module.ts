import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPagComponent } from './primeira-pag/primeira-pag.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';

const routes: Routes = [
    {path: "primeira-pag", component: PrimeiraPagComponent}, //no navegador use depois de localhost e da porta o /primeira-pag //path significa o caminho
    {path:"segunda-pag", component: SegundaPagComponent}, //sempre tenho que acrescentar essas coisas aqui
    {path:"", redirectTo: "primeira-pag", pathMatch: "full"},// isso é para fazer o redirecionamento de paginas // esse full serve pra quando eu não colocar nenhuma informação na url, ou seja, ela for vazia
    {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent}, //IMPORTANTE IMPORTANTE MPORTANTE o id serve para mim pesquisar o parametro de alguma pagina ou produto que venha de um banco de dados, nesse caso poderia ser um paramentro como :nome ou qualquer outro onde pode ser http//localhost:4200/produtos/1  (produtos é a rota)   (1 = parametro de rota)     ou    http//localhost:4200/cliente?nome=joao&idade=23  (parametro de consulta) observe que o ? que é a pesquisa do parametro de consulta e a separação de parametros é feita pelo & // chave=valor , isso serve para fazer filtros no BD ou query paramenters
    {path: "**", component: PaginaNaoEncontradaComponent} // a partir dos ** ele assumi que n existe nenhuma pagina com aquela descrição na url e mostra o componente PaginaNãoEncontrada // path significa caminho
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
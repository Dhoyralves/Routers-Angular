import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ //tem um decorador de injetavel
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { //vou ter que usar o serviço de autenticação para ver se estou logado com o token no navegador, entao se eu tiver logado vou deixaro usuario ir praquela pagina, se não tiver logado vou retornar um false no canActivate, não deixando eu acessar a pagina... começo com o construtor nessa parte
  constructor(
    private auth:AuthService,
    private router: Router
    ){}
  
  canActivate( //metodo
    route: ActivatedRouteSnapshot, //dependencias route e state e retorna um obserble
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return false; // coloque isso inicialmente retornando false, depois mude //esse return atribue o acesso a pagina
    if(!this.auth.estaAutenticado()){
      this.router.navigate(["login"]); //quando ele não tiver autenticado ele vai para pagina de login, se eu não tiver o acess-token tbm ele vem pra cá
      return false;
    }

    return true; //se tiver feito o login, ele vai para a pagina
  }
  
}

//os routes guard é para limitar o acesso as rotas de paginas, somente pra quem se autenticar, ou proteger algumas rotas ex.: login
//ng g guard auth (pode mudar esse nome auth) com a interface de implementação CanActivate
// esse guard trabalha junto com o service para fazer a autenticação de login

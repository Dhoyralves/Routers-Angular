import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ //tem um decorador de injetavel
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth:AuthService,
    private router: Router
    ){}
  
  canActivate( //metodo
    route: ActivatedRouteSnapshot, //dependencias route e state e retorna um obserble
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return false; // coloque isso primeiro depois mude //aqui que ele atribue o acesso
    if(!this.auth.estaAutenticado()){
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
  
}

//esse guard é para limitar o acesso a pagina, somente pra quem se autenticar
//ng g guard auth (pode mudar esse nome auth) com a interface de implementação CanActivate

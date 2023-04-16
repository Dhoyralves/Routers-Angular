import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ //tem um decorador de injetavel
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate( //metodo
    route: ActivatedRouteSnapshot, //dependencias route e state e retorna um obserble
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false; // aqui que ele atribue o acesso
  }
  
}

//esse guard é para limitar o acesso a pagina, somente pra quem se autenticar
//ng g guard auth (pode mudar esse nome auth) com a interface de implementação CanActivate

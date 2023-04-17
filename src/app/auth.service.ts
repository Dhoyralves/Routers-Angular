import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  constructor() { }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, senha: string): boolean{
    if(email === "admin@admin.com.br" && senha === "1234"){
      sessionStorage.setItem("access-token", this.acessToken);
      return true;
    }

    return false;
  }

  logout(){
    sessionStorage.clear();
  }
}

//esse serviço é para fazer a autenticação de login do usuario
//ng g service auth (o nome auth pode ser mudado)

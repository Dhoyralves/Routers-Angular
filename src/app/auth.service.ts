import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaAutenticado(): boolean {

  }

  login(email: string, senha: string){

  }

  logout(){
    
  }
}

//esse serviço é para fazer a autenticação de login do usuario
//ng g service auth (o nome auth pode ser mudado)

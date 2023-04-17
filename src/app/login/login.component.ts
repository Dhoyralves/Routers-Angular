import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  senha = "";

  constructor( // primeiro eu deixo no ponto todo o service.ts e depois venho pra cá pro construtor
  //pra usar o service eu injeto o serviço no constructor,atraves do auth:
    private auth: AuthService,
    private router: Router //isso é pra navegar pras paginas
  ){

  }

  login(){ //para trabalhar com login, preciso de uma função pra me dizer quando estou logado ou quando não estou logado, e para isso é cria um service.ts de autenticação que vai funcionar com o guard para fazer a autenticação do usuario
    
    if(this.auth.login(this.email, this.senha)){
      this.router.navigate(["pagina-protegida"]); //isso é para navegar para a pagina-protegida
      return;
    }
    alert ("Login Invalido");
    this.email = "";
    this.senha = "";
  }
}
//depois disso eu configuro meu guarde e tiro o return false de lá
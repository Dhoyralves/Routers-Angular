import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";// esse token é obtido atraves de uma requisição no backend, isso aqui é so para exemplo
  constructor() { }

  estaAutenticado(): boolean { //esse metodo é para saber se estou autenticado ou não, retornando um boolean
    return !!sessionStorage.getItem("access-token");//quando ele está autenticado ou não eu olho o retorno do sessionStorage, o access-token é a chave para acessar o token no navegador
    //coloque as !! para retornar um boolean, sem isso retorna uma string ou algo nulo
    //entao quando eu tiver access-token no sessionStorage ele está autenticado e retorna um true, quando não tiver ele retorna um false, não estando autenticado
  }
  //quando se trabalha com login,salvamos o token de acessodo usuarioou numa sessionStorage (armazena apenas na seção, se eu fechar a aba ele apaga) ou num localStorage (armazena permanente, mesmo que eu desligue meu pc)... consigo ter acesso a esses salvamentos atraves do meu navegador na aba Aplication em local Storage ou Session Storage ... esses storage no geral é onde armazeno pequenas informações como login do usuario ou que tipo de usuario, o que costuma fazer
  //a forma de identificar o usuario é atraves de um token jwt com uma sequencia de caracteres criptografado que conseguimos descriptografar e extrair algumas informações... site JWT.io no payload temos: o id  = sub do usuario para identificar ali na aplicação, nome = name, o papel se é um admin ou priviegios e o iat = tempo de expiração do token
  //isso é basicamente uma string para identificar que o usuario esta logado, isso tambem é implementado pelo backend da aplicação

  login(email: string, senha: string): boolean{
    if(email === "admin@admin.com.br" && senha === "1234"){ //se ele tiver essas duas informações ele salva dentro do sessionStorage... salvar = setItem() entao ele salva dentro do sessionStorage o access-token e o token
      sessionStorage.setItem("access-token", this.acessToken); //acess-token é um nome padrão nos navegadores para salvar
      return true; //se deu certo o token eu posso direcionar a pessoa ou pra pagina que ela quer, liberando o acesso ou so dizer pro cara que vai chamar a função se deu certo ou não o login, que é o mais indicado, por isso o return true... pq posso ta indo pra outras rotas e só preciso desse login
    }

    return false; //quando não tiver email e enha e por consequencia o token, ele retorna false
  }

  logout(){
    sessionStorage.clear();// limpa o acess-token que temos
  }
}

//esse serviço é para fazer a autenticação de login do usuario
//ng g service auth (o nome auth pode ser mudado)
// esse serviço trabalha junto com o guard para fazer a autenticação de login

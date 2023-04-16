import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit{
  id: number | null = null; //ele vai começar com null = nulo
  idade: number | null = null; 
  nome: string | null = ""; //coloca o null aqui pq ele n espera uma string, esse null é pra mandar algo e dá certo mesmo que eu nao tenha colocado nada

  constructor(private route: ActivatedRoute) // atraves disso eu trabalho com a rota
  {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{ 
        //this.id = params.get("id");          //esse id é o la de cima ele reclama pq é um numero nulo, e ele ta recebendo um string nula, entao ajeitando // o subscribe é pra qnd eu tiver acesso ao parametro da url, ele vai trazer os resurves ou os parametros... e esses parametros são os paraMap... a propriedade "id" está contida na classe id, la em cima
        this.id = Number(params.get("id"));
      });

      this.route.queryParamMap.subscribe(params => {
        this.idade = Number(params.get("idade"));
        this.nome = params.get("nome")
      })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pag',
  templateUrl: './primeira-pag.component.html',
  styleUrls: ['./primeira-pag.component.css']
})
export class PrimeiraPagComponent {
  constructor(
    private router: Router //preciso disso para o botão funcionar
  ){ }
  
  vaiParaSegundaPag(){
    this.router.navigate(["segunda-pag"]) //preciso disso para o botão funcionar
  }
}

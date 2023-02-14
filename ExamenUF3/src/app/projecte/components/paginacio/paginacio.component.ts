import { Component, OnInit } from '@angular/core';
import { Artista } from '../../model/entitats/Artista';
import { Pagina } from '../../model/entitats/Pagina';
import { Quadra } from '../../model/entitats/Quadra';
import { user } from '../../model/services/user';

@Component({
  selector: 'app-paginacio',
  templateUrl: './paginacio.component.html',
  styleUrls: ['./paginacio.component.css']
})
export class PaginacioComponent {
  quadres: Array<Quadra> = [];
  artista!: Artista;
  pagina!: Pagina;
  constructor(private httpClient: user) { 
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
      }
    )
    this.httpClient.getNumPagines().subscribe(
      response => {
        this.pagina = response.pagination;
      }
    )
  }
   canviarPlana() {
    const nomFormulari: any = document.getElementById(`formPagines`);
    let formulari: any = new FormData(nomFormulari);
    if(formulari.get('page') == ''){
      this.httpClient.getPagina('0', formulari.get('limit')).subscribe(
        response => {
          this.quadres = response.data;
        }
      )
    }
  }
}

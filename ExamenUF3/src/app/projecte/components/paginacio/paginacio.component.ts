import { Component, OnInit } from '@angular/core';
import { Artista } from '../../model/entitats/Artista';
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
  current_page!: string;
  total_pages!: string;
  constructor(private httpClient: user) { 
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
      }
    )
    this.httpClient.getNumPagines().subscribe(
      response => {
        this.current_page = response.pagination.current_page;
      }
    )
    this.httpClient.getNumPagines().subscribe(
      response => {
        this.total_pages = response.pagination.total_pages;
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

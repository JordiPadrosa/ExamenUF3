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
  constructor(private httpClient: user) { 
    this.httpClient.getQuadres().subscribe(
      response => {
        console.log(response);
        this.quadres = response.data;
      }
    )
  }
   canviarPlana() {
    this.httpClient.getPagina(id).subscribe(
      response => {
        this.artista = response.data;
      }
    )
  }
}

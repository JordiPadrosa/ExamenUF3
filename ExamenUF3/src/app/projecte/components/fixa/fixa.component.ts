import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Artista } from '../../model/entitats/Artista';
import { Quadra } from '../../model/entitats/Quadra';
import { user } from '../../model/services/user';

@Component({
  selector: 'app-fixa',
  templateUrl: './fixa.component.html',
  styleUrls: ['./fixa.component.css']
})
export class FixaComponent {
  quadres: Array<Quadra> = [];
  artista!: Artista;
  constructor(private httpClient: user) { 
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
      }
    )
  }
  getArtistaById(id : string) {
    this.httpClient.getArtistaByID(id).subscribe(
      response => {
        this.artista = response.data;
      }
    )
    return this.artista;
  }
  
}

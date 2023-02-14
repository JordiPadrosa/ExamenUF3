import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quadra } from '../../model/entitats/Quadra';
import { user } from '../../model/services/user';

@Component({
  selector: 'app-fixa',
  templateUrl: './fixa.component.html',
  styleUrls: ['./fixa.component.css']
})
export class FixaComponent {
  quadres: Array<Quadra> = [];
  constructor(private httpClient: user) { 
    this.httpClient.getQuadres().subscribe(
      response => {
        console.log(response);
        this.quadres = response.data;
      }
    )
    this.httpClient.getArtistes().subscribe(
      response => {
        console.log(response);
        this.quadres = response.data;
      }
    )
  }
  
}

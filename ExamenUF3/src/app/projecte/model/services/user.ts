import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class user {
    constructor(private http: HttpClient) { };
    create(user: any): Observable<any> {
        const requestOptions = this.createHeader();
        const userJSON = JSON.stringify(user);

        return this.http.post("https://gorest.co.in/public/v2/users", userJSON, requestOptions);
      }

    getQuadres():Observable<any> {
        const requestOptions = this.createHeader();
        return this.http.get('https://api.artic.edu/api/v1/artworks', requestOptions);
    }

    getArtistes():Observable<any> {
        const requestOptions = this.createHeader();
        return this.http.get('https://api.artic.edu/api/v1/artworks', requestOptions);
    }

    private createHeader() {
        const header = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Control-Allow-Headers': 'Origin,Content-Type,Accept,Authorization',
        }
        return { headers: new HttpHeaders(header)}
    }
}
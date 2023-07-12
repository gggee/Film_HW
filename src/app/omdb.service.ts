import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {
  private apiKey = '955b6031'; 

  constructor(private http: HttpClient) {}

  getMovieInfo(title: string) {
    const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}`;

    return this.http.get(url);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';

const url = 'http://localhost:3333/movies/'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie)
  }

  list(): Observable<Movie[]> {
    return this.http.get<Movie[]>(url)
  }
}

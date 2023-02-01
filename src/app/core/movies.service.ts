import { HttpClient, HttpParams } from '@angular/common/http';
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

  list(page: number, limit: number): Observable<Movie[]> {
    let httpParams = new HttpParams()
    httpParams = httpParams
      .set('_sort', 'id')
      .set('_order', 'desc')
      .set('_page', page.toString())
      .set('_limit', limit.toString())

    return this.http.get<Movie[]>(url, { params: httpParams })
  }
}

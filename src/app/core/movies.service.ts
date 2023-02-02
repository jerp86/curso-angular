import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericField } from '../shared/models/generic-field';
import { Movie } from '../shared/models/movie';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3333/movies/'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient, private configParams: ConfigParamsService) { }

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie)
  }

  list(page?: number, limit?: number, searchText?: string, searchField?: GenericField): Observable<Movie[]> {
    let httpParams = new HttpParams()
    httpParams = httpParams
      .set('_sort', 'id')
      .set('_order', 'desc')
      .set('_page', page ? page.toString() : '')
      .set('_limit', limit ? limit.toString() : '')

    if (searchText) {
      httpParams = httpParams.set('q', searchText)
    }

    if (searchField) {
      httpParams = httpParams.set(searchField.type, searchField.value)
    }

    return this.http.get<Movie[]>(url, { params: httpParams })
  }
}

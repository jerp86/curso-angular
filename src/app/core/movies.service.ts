import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/config-params';
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

  list(config: ConfigParams): Observable<Movie[]> {
    const params = this.configParams.configureParameters(config)
    return this.http.get<Movie[]>(url, { params })
  }

  getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(url + id)
  }
}

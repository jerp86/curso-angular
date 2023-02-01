import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  readonly limit = 4
  page = 0
  movies = [] as Movie[]

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.#listMovies()
  }

  #listMovies(): void {
    this.page++
    this.moviesService.list(this.page, this.limit).subscribe(movies => this.movies.push(...movies))
  }

  onScroll(): void {
    this.#listMovies()
  }

  open() {}
}

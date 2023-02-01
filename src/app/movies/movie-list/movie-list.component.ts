import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  searchText = ''
  searchGenre = ''
  listFilter = {} as FormGroup
  movies = [] as Movie[]
  moveGenres = [] as string[]

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) {}

  #listMovies(): void {
    this.page++
    this.moviesService
      .list(this.page, this.limit, this.searchText, this.searchGenre)
      .subscribe(movies => this.movies.push(...movies))
  }

  #resetList(): void {
    this.page = 0
    this.movies = []
    this.#listMovies()
  }

  ngOnInit(): void {
    this.listFilter = this.formBuilder.group({
      text: [''],
      movieGenre: [''],
    })

    this.moveGenres = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

    this.#listMovies()
  }

  onScroll(): void {
    this.#listMovies()
  }

  open() {}
}

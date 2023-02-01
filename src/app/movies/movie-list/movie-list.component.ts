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
  movies = [] as Movie[]
  listFilter = {} as FormGroup
  moveGenres = [] as string[]

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listFilter = this.formBuilder.group({
      text: [''],
      movieGenre: [''],
    })

    this.moveGenres = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { MoviesService } from 'src/app/core/movies.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  readonly emptyPhotoUrl = 'https://user-images.githubusercontent.com/54115624/216220907-7504edfc-7145-4923-9412-b968d4094dbd.png'

  configParams: ConfigParams =  {
    page: 0,
    limit: 4
  }
  listFilter = {} as FormGroup
  movies = [] as Movie[]
  moveGenres = [] as string[]

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) {}

  #listMovies(): void {
    this.configParams.page = this.configParams?.page ? this.configParams.page + 1 : 1
    this.moviesService
      .list(this.configParams)
      .subscribe(movies => this.movies.push(...movies))
  }

  #resetList(): void {
    this.configParams.page = 0
    this.movies = []
    this.#listMovies()
  }

  ngOnInit(): void {
    this.listFilter = this.formBuilder.group({
      text: [''],
      movieGenre: [''],
    })

    this.listFilter.get('text')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.configParams.query = value
        this.#resetList()
      })

    this.listFilter.get('movieGenre')?.valueChanges
      .subscribe((value: string) => {
        this.configParams.field = { type: 'movieGenre', value }
        this.#resetList()
      })

    this.moveGenres = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

    this.#listMovies()
  }

  onScroll(): void {
    this.#listMovies()
  }

  open() {}
}

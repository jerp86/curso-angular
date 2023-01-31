import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.scss']
})
export class MovieRegistrationComponent implements OnInit {
  registration: FormGroup = {} as FormGroup
  moveGenres: string[] = []

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService
  ) {}

  get fields()  {
    return this.registration.controls
  }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      imageUrl: ['', [Validators.minLength(10)]],
      releaseDate: ['', [Validators.required]],
      description: [''],
      note: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      imdbUrl: ['', [Validators.minLength(10)]],
      movieGenre: ['', [Validators.required]]
    })

    this.moveGenres = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']
  }

  #savedForm(movie: Movie): void {
    this.moviesService.save(movie)
      .subscribe(
        () => alert('SUCESSO no #savedForm'),
        () => alert('ERRO no #savedForm')
      )
  }

  handleSubmit(): void {
    this.registration.markAllAsTouched()

    if (this.registration.invalid) {
      return
    }

    const movie = this.registration.getRawValue() as Movie
    this.#savedForm(movie)
  }

  handleResetForm(): void {
    this.registration.reset()
  }
}

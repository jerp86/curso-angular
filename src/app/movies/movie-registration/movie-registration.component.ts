import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.scss']
})
export class MovieRegistrationComponent implements OnInit {
  id = 0
  moveGenres: string[] = []
  registration = {} as FormGroup
  titlePage = ''

  constructor(
    public dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router: Router,
  ) {
    this.#createForm(this.#createEmptyForm())
  }

  #savedForm(movie: Movie): void {
    this.moviesService.save(movie)
      .subscribe(
        () => {
          const config = {
            data: {
              successButton: 'Ir para a listagem',
              cancelButton: 'Cadastrar um novo filme',
              colorCancelButton: 'primary',
              hasCloseButton: true,
            } as Alert
          }
          const dialogRef = this.dialog.open(AlertComponent, config)

          dialogRef.afterClosed().subscribe((option: boolean) => {
            if (option) {
              this.router.navigateByUrl('movies')
              return
            }

            this.handleResetForm()
          })
        },
        () => {
          const config = {
            data: {
              title: 'Erro ao salvar o registro!',
              description: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
              successButton: 'Fechar',
              colorSuccessButton: 'warn',
            } as Alert
          }

          this.dialog.open(AlertComponent, config)
        }
      )
  }

  #createEmptyForm(): Movie {
    return {} as Movie
  }

  #createForm(movie: Movie): void {
    this.registration = this.formBuilder.group({
      title: [movie?.title, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      imageUrl: [movie?.imageUrl, [Validators.minLength(10)]],
      releaseDate: [movie?.releaseDate, [Validators.required]],
      description: [movie?.description],
      note: [movie?.note, [Validators.required, Validators.min(0), Validators.max(10)]],
      imdbUrl: [movie?.imdbUrl, [Validators.minLength(10)]],
      movieGenre: [movie?.movieGenre, [Validators.required]]
    })
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

  ngOnInit(): void {
    this.moveGenres = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

    this.id = this.activateRoute.snapshot.params['id']
    if (!this.id) {
      this.titlePage = 'Cadastrar Filme'
      this.#createForm(this.#createEmptyForm())
      return
    }

      this.titlePage = 'Editar Filme'
      this.moviesService
      .getById(this.id)
      .subscribe(
        (movie) => this.#createForm(movie),
        () => {
          this.#createForm(this.#createEmptyForm())
          this.titlePage = 'Cadastrar Filme'
          this.id = 0
        }
      )
  }
}

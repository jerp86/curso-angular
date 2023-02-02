import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  readonly emptyPhotoUrl = 'https://user-images.githubusercontent.com/54115624/216220907-7504edfc-7145-4923-9412-b968d4094dbd.png'

  movie = {} as Movie
  id = 0

  constructor(
    public dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  #getMovie() {
    this.moviesService.getById(this.id).subscribe(movie => this.movie = movie)
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.#getMovie()
  }

  deleteMovie(): void {
    const config = {
      data: {
        title: 'Você tem certeza que deseja excluir?',
        description: 'Caso você tenha certceza que deseja excluir, clique no botão OK',
        colorSuccessButton: 'warn',
        colorCancelButton: 'primary',
        hasCloseButton: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);

    dialogRef.afterClosed().subscribe((option: boolean) => {
      if (option) {
        this.moviesService
          .deleteById(this.id)
          .subscribe(() => this.router.navigateByUrl('/movies'));
      }
    });
  }

  editMovie(): void {
    if (!this.id || this.id === 0) return

    this.router.navigateByUrl(`/movies/registration/${this.id}`)
  }
}

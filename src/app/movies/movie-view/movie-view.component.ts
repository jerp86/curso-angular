import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/movies.service';
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
    private activateRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  #getMovie() {
    this.moviesService.getById(this.id).subscribe(movie => this.movie = movie)
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.#getMovie()
  }
}

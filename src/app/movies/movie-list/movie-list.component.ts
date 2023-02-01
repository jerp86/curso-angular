import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'dio-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [] as Movie[]

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.list().subscribe(movies => this.movies = movies)
  }

  open() {}
}

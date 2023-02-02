import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieRegistrationComponent } from './movies/movie-registration/movie-registration.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { MoviesModule } from './movies/movies.module';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    children: [
      { path: '', component: MovieListComponent },
      {
        path: 'registration',
        component: MovieRegistrationComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: MovieViewComponent,
        pathMatch: 'full'
      },
    ],
  },
  { path: '**', redirectTo: 'movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MoviesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

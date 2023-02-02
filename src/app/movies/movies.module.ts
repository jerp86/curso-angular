import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MovieRegistrationComponent } from './movie-registration/movie-registration.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MaterialModule } from '../shared/material/material.module';
import { FieldsModule } from '../shared/components/fields/fields.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieRegistrationComponent,
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    FieldsModule,
    FormsModule,
    InfiniteScrollModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MoviesModule { }

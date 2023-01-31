import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieRegistrationComponent } from './movie-registration/movie-registration.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { FieldsModule } from '../shared/components/fields/fields.module';

@NgModule({
  declarations: [
    MovieRegistrationComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FieldsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MoviesModule { }

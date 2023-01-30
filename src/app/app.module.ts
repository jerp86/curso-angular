import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE } from '@angular/material/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './shared/components/top/top.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TableComponent } from './shared/components/table/table.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    MoviesModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

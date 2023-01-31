import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputDateComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextComponent,
    InputTextareaComponent,
  ]
})
export class FieldsModule { }

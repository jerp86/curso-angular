import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputDateComponent
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
    InputTextComponent,
    InputTextareaComponent,
  ]
})
export class FieldsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputNumberComponent } from './input-number/input-number.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
  ]
})
export class FieldsModule { }

import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'dio-input-date',
  templateUrl: './input-date.component.html',
})
export class InputDateComponent {
  @Input() controlName = ''
  @Input() formGroup = {} as FormGroup
  @Input() inputName = ''

  constructor(public validateField: ValidateFieldsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
  }
}

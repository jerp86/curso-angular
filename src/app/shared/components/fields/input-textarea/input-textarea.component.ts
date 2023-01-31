import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'dio-input-textarea',
  templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent {
  @Input() inputName = ''
  @Input() controlName = ''
  @Input() formGroup = {} as FormGroup

  constructor(public validateField: ValidateFieldsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
  }
}

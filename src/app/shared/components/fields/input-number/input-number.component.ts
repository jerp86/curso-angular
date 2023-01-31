import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'dio-input-number',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent {
  @Input() controlName = ''
  @Input() formGroup = {} as FormGroup
  @Input() inputName = ''
  @Input() max = 10
  @Input() min = 0
  @Input() step = 1

  constructor(public validateField: ValidateFieldsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
  }
}

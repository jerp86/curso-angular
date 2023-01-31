import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFieldsService } from '../validate-fields.service';

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() inputName: string = ''
  @Input() controlName: string = ''
  @Input() formGroup: FormGroup = {} as FormGroup

  constructor(public validateField: ValidateFieldsService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
  }
}

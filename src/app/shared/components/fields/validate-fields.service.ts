import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFieldsService {

  constructor() { }

  #hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName)
  }

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    const hasTouchedOrDirty = control.touched || control.dirty
    if (hasTouchedOrDirty && this.#hasError(control, errorName)) {
      return true
    }

    return false
  }

  validateLength(control: AbstractControl, errorName: string): number {
    const error = control.errors?.[errorName]
    return error.requiredLength || error.min || error.max || 0
  }
}

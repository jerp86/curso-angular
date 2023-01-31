import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFieldsService {

  constructor() { }

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    const hasTouchedOrDirty = control.touched || control.dirty
    if (hasTouchedOrDirty && this.#hasError(control, errorName)) {
      return true
    }

    return false
  }

  #hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName)
  }
}

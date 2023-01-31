import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dio-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.scss']
})
export class MovieRegistrationComponent implements OnInit {
  registration: FormGroup = {} as FormGroup

  constructor(private formBuilder: FormBuilder) {}

  get hasTouchedOrDirty() {
    return this.registration.touched || this.registration.dirty
  }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      imageUrl: ['', [Validators.minLength(10)]],
      releaseDate: ['', [Validators.required]],
      description: [''],
      note: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      imdbUrl: ['', [Validators.minLength(10)]],
      movieGenre: ['', [Validators.required]]
    })
  }

  savedForm(): void {
    this.registration.markAllAsTouched()

    if (this.registration.invalid) {
      return
    }

    alert(`SUCESSO!!!\n\n ${JSON.stringify(this.registration.value, null, 2)}`)
  }

  resetForm(): void {
    this.registration.reset()
  }

  #hasError(property: string) {
    return this.registration.controls[property].errors
  }

  hasRequired(property: string): boolean {
    const hasError = this.#hasError(property)
    if (!hasError) return false

    return hasError['required']
  }

  hasMin(property: string): boolean {
    const hasError = this.#hasError(property)
    if (!hasError) return false

    return hasError['minlength'] || hasError['min']
  }

  hasMax(property: string): boolean {
    const hasError = this.#hasError(property)
    if (!hasError) return false

    return hasError['maxlength'] || hasError['max']
  }
}

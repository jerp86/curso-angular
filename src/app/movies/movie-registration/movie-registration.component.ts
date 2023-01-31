import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';

@Component({
  selector: 'dio-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.scss']
})
export class MovieRegistrationComponent implements OnInit {
  registration: FormGroup = {} as FormGroup

  constructor(
    private validateField: ValidateFieldsService,
    private formBuilder: FormBuilder
  ) {}

  get fields()  {
    return this.registration.controls
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

  hasRequired(property: string): boolean {
    return this.validateField.hasErrorValidate(this.fields?.[property], 'required')
  }

  hasMin(property: string): boolean {
    return this.validateField.hasErrorValidate(this.fields?.[property], 'minlength')
      || this.validateField.hasErrorValidate(this.fields?.[property], 'min')
  }

  hasMax(property: string): boolean {
    return this.validateField.hasErrorValidate(this.fields?.[property], 'maxlength')
      || this.validateField.hasErrorValidate(this.fields?.[property], 'max')
  }
}

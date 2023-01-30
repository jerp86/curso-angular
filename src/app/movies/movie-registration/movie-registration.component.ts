import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dio-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.scss']
})
export class MovieRegistrationComponent implements OnInit {
  registration?: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
    })
  }
}

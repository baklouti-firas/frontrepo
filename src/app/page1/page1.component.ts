import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {


  myForm!: FormGroup
  constructor(private fb: FormBuilder) {
    let formControl = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)

      ]
      ),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)

      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+")

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email


      ])
    }
    this.myForm = this.fb.group(formControl)


  }
  get firstname() {
    return this.myForm.get('firstname')
  }
  get lastname() {
    return this.myForm.get('lastname')
  }
  get phone() {
    return this.myForm.get('phone')
  }
  get email() {
    return this.myForm.get('email')
  }


  save() {

    console.log(this.myForm.value);

  }




}

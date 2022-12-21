import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  requiredForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({ username: ['', Validators.required] });
  }

  onSubmit() {
    console.log('test');
    this.myForm();
    console.log('OnSubmit fired');
    if (!this.requiredForm.valid) {
      console.log('Error');
    }
  }
  ngOnInit() {}
}

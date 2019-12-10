import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { matchingPasswords } from './validator';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
  this.addForm = this.formBuilder.group({
  username: ['', Validators.required],
  email: ['', Validators.required],
  role: ['', Validators.required],
  password: ['', Validators.required],
  password2: ['', Validators.required] },
  { validator: matchingPasswords('password', 'password2')
  })
  };
  addUser() {
  if (this.addForm.valid) {
  var adduser = {
  username: this.addForm.controls['username'].value,
  email: this.addForm.controls['email'].value,
  password: this.addForm.controls['password'].value,
  profile: {
  role: this.addForm.controls['role'].value,
  name: this.addForm.controls['username'].value,
  email: this.addForm.controls['email'].value
  }
  };
  console.log(adduser);// adduser var contains all our form values. store it where you want
  this.addForm.reset();// this will reset our form values to null
  }
  }
}

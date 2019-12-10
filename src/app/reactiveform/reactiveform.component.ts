import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myform: FormGroup;
  // msg:any;
  public userdata: any = [];

  countries: any = [] = [
    {name: 'INDIA'},
    {name: 'USA'},
    {name: 'GERMANY'},
    {name: 'CANADA'},
    {name: 'BRAZIL'},
  ];
  users: any[] = [];

  get f() {
    return this.myform.controls;
  }
  constructor() {
    this.myform = new FormGroup({

      firstname : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-zA-Z]*$')]),

      lastname : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-zA-Z]*$')]),

      email : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),

      amount : new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(7), Validators.pattern('^[0-9]*$')]),

      gender : new FormControl('', [Validators.required]),

      dob : new FormControl('', [Validators.required]),

      country : new FormControl('', [Validators.required])

    });
  }

  ngOnInit() {
  }
  onSubmit() {
    // debugger
    if (this.myform.valid) {
      console.log(this.myform.value);
      // alert(JSON.stringify(forData.value));
      // this.msg=forData.value;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myform.value));
  }

  saveData(myform) {
    this.users.push(myform.value);
    console.log(this.users);
  }

  update() {

    this.myform.patchValue({
      firstName: this.myform.get('firstName').value,
      lastname: this.myform.get('lastname').value,
      email: this.myform.get('email').value,
      amount: this.myform.get('amount').value,
      gender: this.myform.get('gender').value,
      dob: this.myform.get('dob').value,
      country: this.myform.get('country').value,

   });
  }

}

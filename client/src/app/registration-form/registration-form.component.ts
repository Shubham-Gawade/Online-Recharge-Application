import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  passcheck = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authServive: AuthenticationService
  ) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      transactionId: ['', Validators.required]
    });
  }

  register() {
    const data = {
      firstname: this.registrationForm.get('firstname').value,
      lastname: this.registrationForm.get('lastname').value,
      mobileno: this.registrationForm.get('mobileno').value,
      username: this.registrationForm.get('username').value,
      password: this.registrationForm.get('password').value,
      transactionId: this.registrationForm.get('transactionId').value,
    };
    console.log('data', data);

    this.authServive.register(data).subscribe((response: any) => {
        alert(response.msg);
        this.router.navigate(['/login']);
      }, (error) => {
        console.log(error);
        alert(error.error.msg);
    });
  }
}

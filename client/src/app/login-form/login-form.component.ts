import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  public username ='';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authServive: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
      const data = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
      };
      this.username = data.username;

      this.authServive.login(data).subscribe((response: any) => {
        alert(response.msg);
        this.router.navigate(['/dashboard', this.username]);
        }, (error) => {
        console.log(error);
        alert(error.error.msg);
      });
  }
}

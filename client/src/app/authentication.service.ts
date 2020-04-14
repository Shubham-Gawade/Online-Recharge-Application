import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userApi = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(this.userApi + '/login', data);
  }

  register(data) {
    return this.http.post(this.userApi + '/signup', data);
  }

  getBalance(data) {
    return this.http.post(this.userApi + '/getBalance', data);
  }
}

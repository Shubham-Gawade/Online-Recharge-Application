import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authApi = 'http://localhost:3000/user';

  companyApi = 'http://localhost:3000/company';

  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(this.authApi + '/login', data);
  }

  register(data) {
    return this.http.post(this.authApi + '/signup', data);
  }

  getCompanyName() {
    return this.http.get(this.companyApi + '/companyname');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  userDetailsApi = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getBalance(data) {
    return this.http.post(this.userDetailsApi + '/getUserDetails', data);
  }
}

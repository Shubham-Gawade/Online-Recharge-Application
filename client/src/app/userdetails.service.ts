import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  userDetailsApi = 'http://localhost:3000/user';
  tranApi = 'http://localhost:3000/transaction';

  constructor(
    private http: HttpClient
  ) { }

  getBalance(data) {
    return this.http.post(this.userDetailsApi + '/getUserDetails', data);
  }

  checktransactionpass(data2) {
    return this.http.post(this.userDetailsApi + '/checktransactionpass', data2);
  }

  recharge(data) {
    return this.http.post(this.tranApi + `/recharge`, data);
  }

  findbal(data) {
    return this.http.post(this.userDetailsApi + '/findbal', data);
  }

  updateUserData(data1) {
    return this.http.put(this.userDetailsApi + `/updateUserData`, data1);
  }

  getTransactionDetails(data) {
    return this.http.post(this.tranApi + '/transactionDetails', data);
  }
}

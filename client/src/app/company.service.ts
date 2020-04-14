import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyApi = 'http://localhost:3000/company';
  companyDataPackApi = 'http://localhost:3000/dataPackinfo';


  constructor(
    private http: HttpClient
  ) { }

  getCompanyName() {
    return this.http.get(this.companyApi + '/companyname');
  }

  getCompanyDataPack(data) {
    return this.http.post(this.companyDataPackApi + '/companyDataPack', data);
  }
}

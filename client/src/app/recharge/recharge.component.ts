import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  companyNameList = [];
  companyDataPack = [];

  constructor(
    private companyServive: CompanyService
  ) { }

  ngOnInit() {
    this.companyServive.getCompanyName().subscribe((response: any) => {
      this.companyNameList = response.companyNames;
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

  dataPackDisplay(name) {

    const data = {
      companyname : name
    };

    this.companyServive.getCompanyDataPack(data).subscribe((response: any) => {
      this.companyDataPack = response.DataPack;
      console.log(this.companyDataPack);
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

}

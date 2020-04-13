import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  companyNameList = [];

  constructor(
    private authServive: AuthenticationService
  ) { }

  ngOnInit() {
    this.authServive.getCompanyName().subscribe((response: any) => {
      this.companyNameList = response.companyNames;
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

}

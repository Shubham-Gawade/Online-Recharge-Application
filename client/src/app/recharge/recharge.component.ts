import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  username = '';
  rechargeForm: FormGroup;
  companyNameList = [];
  companyDataPack = [];
  selected: string;
  public balance = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyServive: CompanyService,
    private Userdetails: UserdetailsService
  ) { }

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('this.username');
    this.username = name;

    this.companyServive.getCompanyName().subscribe((response: any) => {
      this.companyNameList = response.companyNames;
      this.selected = 'false';
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });

    this.rechargeForm = this.fb.group({
      mobileno: ['', Validators.required],
      company: ['', Validators.required],
      amount: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  dataPackDisplay(name) {

    const data = {
      companyname : name
    };

    this.companyServive.getCompanyDataPack(data).subscribe((response: any) => {
      this.companyDataPack = response.DataPack;
      this.selected = 'true';
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

  recharge() {

    const data = {
      username: this.username,
      mobileno: this.rechargeForm.get('mobileno').value,
      company: this.rechargeForm.get('company').value,
      amount: this.rechargeForm.get('amount').value,
      tranpass: this.rechargeForm.get('password').value
    };

    const data2 = {
      tranpass: data.tranpass,
      username: this.username
    };

    const amt = data.amount;
    // checking transaction password

    this.Userdetails.checktransactionpass(data2).subscribe((response: any) => {

      this.Userdetails.recharge(data).subscribe((response1: any) => {

        const data3 = {
          username: this.username
        };

        this.Userdetails.findbal(data3).subscribe((res: any) => {
              this.balance = res.bal;
              const num1 = Number(this.balance);
              const num2 = Number(amt);
              const num3 = (num1 - num2).toString();
              this.balance = num3;

              const data1 = {
                username: this.username,
                balance: this.balance
              };

              const data = {
                username: this.username
              };

              // updating user
              this.Userdetails.updateUserData(data1).subscribe((response2: any) => {
                    alert(response2.msg);
                    this.router.navigate(['/dashboard', data.username]);
                  }, (error) => {
                    console.log(error);
                    alert(error.error.msg);
                  });
          }, (error) => {
          console.log(error);
          alert(error.error.msg);
        });

      }, (error) => {

        console.log(error);
        alert(error.error.msg);

      });
  }, (error) => {
    console.log(error);
    alert(error.error.msg);

  });
  }

}

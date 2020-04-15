import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  username = '';
  transactionDetails = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDetails: UserdetailsService
  ) { }


  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('this.username');
    this.username = name;
    const data = {
      username : name
    };

    this.userDetails.getTransactionDetails(data).subscribe((response: any) => {
      this.transactionDetails = response.details;
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

  back() {
    this.router.navigate(['/dashboard', this.username]);
  }
}

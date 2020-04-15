import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username = '';
  userdetails = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDetails: UserdetailsService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('username');
    this.username = name;

    const data = {
      username : name
    };

    this.userDetails.getBalance(data).subscribe((response: any) => {
      this.userdetails = response.userdetail;
      }, (error) => {
      console.log(error);
      alert(error.error.msg);
    });
  }

  Recharge() {
    this.router.navigate(['/recharge', this.username]);
  }
}

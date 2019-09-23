import { Component, OnInit } from '@angular/core';
import {InterestService} from '../Services/interest.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private interestService:InterestService) { }

  Total: number;
  years: number;
  
  calaulateinterest(): void {
    this.Total = this.interestService.calaulateinterest(this.years);
  }
  


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  numberOfHours = 0;
  hourlyRate = 0;
  regularPay = 0;
  overtimePay = 0;
  totalPay = 0;
  tax = 0;
  
  constructor() { }

  // Calculation for regular and overtime pay
  calculatePay() {
    if (this.numberOfHours <= 40) {
      console.log('Regular pay');
      this.regularPay = this.numberOfHours * this.hourlyRate;
      this.overtimePay = 0;
    } else {
      console.log('Overtime pay');
      this.overtimePay = (this.numberOfHours - 40) * this.hourlyRate * 1.5;
      this.regularPay = 40 * this.hourlyRate;
    }

    // Total pay before tax
    this.totalPay = this.regularPay + this.overtimePay;

    // Tax for total pay
    this.tax = this.totalPay * 0.18;
  }

  ngOnInit() {
  }

}

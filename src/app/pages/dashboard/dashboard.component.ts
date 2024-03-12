import { Component, OnInit } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';



export interface Topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topcardsIb: Topcard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getIbData()
  }

  getIbData() {
    this.topcardsIb.push(
      {
        bgcolor: 'bg-red-500',
        icon: 'cog',
        title: '78,000',
        subtitle: ' Total Transaction'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '28',
        subtitle: 'EthSwitch'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'sign-out',
        title: '8',
        subtitle: 'RGTS'
      },
      {
        bgcolor: 'bg-violet-500',
        icon: 'dollar',
        title: '4',
        subtitle: 'Bill Payment'
      },
      {
        bgcolor: 'bg-green-900',
        icon: 'times-circle',
        title: '7',
        subtitle: 'Total Rejected'
      }
    )
  }
  public chartClicked(e: any): void {
  }
}

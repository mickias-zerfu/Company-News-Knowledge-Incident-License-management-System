import { Component, OnInit } from '@angular/core';
import { Topcard } from 'src/app/models/top-card.model';

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
        subtitle: ' Total Transaction',
        link:''
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '28',
        subtitle: 'EthSwitch',
        link:''
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'sign-out',
        title: '8',
        subtitle: 'RGTS',
        link:''
      },
      {
        bgcolor: 'bg-violet-500',
        icon: 'dollar',
        title: '4',
        subtitle: 'Bill Payment',
        link:''
      },
      {
        bgcolor: 'bg-green-900',
        icon: 'times-circle',
        title: '7',
        subtitle: 'Total Rejected',
        link:''
      }
    )
  }
  public chartClicked(e: any): void {
  }
}

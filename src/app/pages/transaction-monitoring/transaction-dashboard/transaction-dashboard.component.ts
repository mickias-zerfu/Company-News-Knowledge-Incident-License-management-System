import { Component, OnInit } from '@angular/core';
import { Topcard } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-transaction-dashboard',
  templateUrl: './transaction-dashboard.component.html',
  styleUrls: ['./transaction-dashboard.component.css']
})
export class TransactionDashboardComponent  implements OnInit {
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

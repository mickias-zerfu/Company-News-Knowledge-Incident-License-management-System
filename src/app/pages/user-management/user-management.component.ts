import { Component } from '@angular/core';
import { Topcard } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {

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
        subtitle: 'Total User'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '28',
        subtitle: 'Active Users'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'sign-out',
        title: '8',
        subtitle: 'InActive Users'
      }
    )
  }
}

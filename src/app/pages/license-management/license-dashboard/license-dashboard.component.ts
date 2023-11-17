import { Component, OnInit } from '@angular/core';
import { Topcard } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-license-dashboard',
  templateUrl: './license-dashboard.component.html',
  styleUrls: ['./license-dashboard.component.css']
})
export class LicenseDashboardComponent implements OnInit{

  topcardsLicense: Topcard[] = [];


  ngOnInit(): void {
    this.gettopcardsLicenseData()
  }
  gettopcardsLicenseData() {
    this.topcardsLicense.push(
      {
        bgcolor: 'bg-red-500',
        icon: 'atm',
        title: '7',
        subtitle: 'Active'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '2',
        subtitle: 'Pending'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'local_offer',
        title: '8',
        subtitle: 'IDGF'
      },
      {
        bgcolor: 'bg-red-500',
        icon: 'cancel',
        title: '1',
        subtitle: 'Expired'
      }
    )
  }
}

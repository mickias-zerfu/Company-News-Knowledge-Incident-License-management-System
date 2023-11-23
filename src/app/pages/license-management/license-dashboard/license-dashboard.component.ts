import { Component, OnInit } from '@angular/core';
import { ReportCard } from 'src/app/models/report-card.model';

@Component({
  selector: 'app-license-dashboard',
  templateUrl: './license-dashboard.component.html',
  styleUrls: ['./license-dashboard.component.css']
})
export class LicenseDashboardComponent implements OnInit{

  topcardsLicense: ReportCard[] = [];


  ngOnInit(): void {
    this.gettopcardsLicenseData()
  }
  gettopcardsLicenseData() {
    this.topcardsLicense.push(
      {
        bgcolor: 'bg-red-500',
        icon: 'atm',
        title: '7',
        subtitle: 'Active',
        link:'lists?status=active'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '2',
        subtitle: 'Pending',
        link:'lists?status=pending'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'local_offer',
        title: '8',
        subtitle: 'Software Products',
        link:'products'
      },
      {
        bgcolor: 'bg-red-500',
        icon: 'cancel',
        title: '1',
        subtitle: 'Expired',
        link:'lists?status=expired'
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
export interface ReportCardLicense {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  link:string,
  linkText:string
}
@Component({
  selector: 'app-license-dashboard',
  templateUrl: './license-dashboard.component.html',
  styleUrls: ['./license-dashboard.component.css']
})
export class LicenseDashboardComponent implements OnInit {
  topcardsLicense: ReportCardLicense[] = [];


  ngOnInit(): void {
    this.gettopcardsLicenseData()
  }

  addNewLicense() {

  }

  gettopcardsLicenseData() {
    this.topcardsLicense.push(
      {
        bgcolor: 'bg-red-500',
        icon: 'atm',
        title: '7',
        subtitle: ' Active License Registered',
        link: 'lists',
        linkText: 'License List'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        title: '2',
        subtitle: 'License Managers',
        link: 'lmanagers',
        linkText: 'Managers List'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'local_offer',
        title: '8',
        subtitle: 'Software Products',
        link: 'softwares',
        linkText: 'Softwares'
      },
      {
        bgcolor: 'bg-red-500',
        icon: 'cancel',
        title: '1',
        subtitle: 'Expired License Registered',
        link: 'lists',
        linkText: ' License List'
      }
    )
  }
}

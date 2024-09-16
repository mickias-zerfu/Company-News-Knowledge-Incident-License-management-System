import { Component, OnInit } from '@angular/core'; 
import { LicenseDashboardService } from 'src/app/services/licenses/license-dashboard.service';
export interface ReportCardLicense {
  bgcolor: string,
  icon: string,
  count: string,
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
  data: { licenseCount: number, licenseManagerCount: number, softwareCount: number, expiredCount: number };

  constructor(private dashboardService: LicenseDashboardService) { }


  ngOnInit(): void {
    this.gettopcardsLicenseData()
  }

  addNewLicense() {

  }

  gettopcardsLicenseData() {

    this.dashboardService.getTotalCounts().subscribe((data: any) => {
      this.data = data; 

      this.topcardsLicense = [
      {
        bgcolor: 'bg-red-500',
        icon: 'atm',
        count: data.licenseCount,
        subtitle: ' Active License Registered',
        link: 'lists',
        linkText: 'License List'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'money-bill',
        count: data.licenseManagerCount,
        subtitle: 'License Managers',
        link: 'lmanagers',
        linkText: 'Managers List'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'local_offer',
        count: data.softwareCount,
        subtitle: 'Software Products',
        link: 'softwares',
        linkText: 'Softwares'
      },
      {
        bgcolor: 'bg-red-500',
        icon: 'cancel',
        count: data.expiredCount,
        subtitle: 'Expired License Registered',
        link: 'lists',
        linkText: ' License List'
      }
    ];
  });
}

}

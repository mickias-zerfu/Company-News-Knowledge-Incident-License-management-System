import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';


export interface TopcardResrc {
  bgcolor: string,
  icon: string,
  count: string,
  subtitle: string,
  link: string
}
@Component({
  selector: 'app-resource-dashboard',
  templateUrl: './resource-dashboard.component.html',
  styleUrls: ['./resource-dashboard.component.css']
})
export class ResourceDashboardComponent implements OnInit {

  topcardsResource: TopcardResrc[] = [];
  totalItems: number = 0;
  recentActivity: any[] = [];
  popularItems: any[] = [];
  categories: string[] = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardData();

  }
  getDashboardData() {
    this.dashboardService.getTotalCounts().subscribe((data: any) => {
      // Update topcardsResource array with data from the backend API
      this.topcardsResource = [
        {
          bgcolor: '#FFB534',
          icon: 'newspaper',
          count: data.newsCount,
          subtitle: 'Shared News',
          link: 'news'
        },
        {
          bgcolor: '#3C0753',
          icon: 'attach_file',
          count: data.sharedResourceCount,
          subtitle: 'File Shared Items',
          link: 'files'
        },
        {
          bgcolor: '#B80000',
          icon: 'info',
          count: data.incidentCount,
          subtitle: 'Solved Incident Registered',
          link: 'incidents'
        },
        {
          bgcolor: '#4F6F52',
          icon: 'priority_high',
          count: data.knowledgeBaseCount,
          subtitle: 'Knowledge Base',
          link: 'knowledges'
        }
      ];
    });
  }

}

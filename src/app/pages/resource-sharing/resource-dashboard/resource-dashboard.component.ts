import { Component, OnInit } from '@angular/core';


export interface TopcardResrc {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  link:string
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
  constructor() { }

  ngOnInit(): void {

    this.totalItems = 100;
    this.recentActivity = [
      { title: 'Item 1', date: '2022-01-01', user: 'User A' },
      { title: 'Item 2', date: '2022-01-02', user: 'User B' },
      { title: 'Item 3', date: '2022-01-03', user: 'User C' },
    ];
    this.popularItems = [
      { title: 'Item 1' },
      { title: 'Item 2' },
      { title: 'Item 3' },
    ];
    this.categories = ['Category 1', 'Category 2', 'Category 3'];
    this.getDashboardData();

  }
  getDashboardData() {
    this.topcardsResource.push(
      {
        bgcolor: '#FFB534',
        icon: 'newspaper',
        title: '10',
        subtitle: 'Shared News',
        link:"news"
      },
      {
        bgcolor: '#3C0753',
        icon: 'attach_file',
        title: '5,000',
        subtitle: 'File Shared Items',
        link:"files"
      },
      {
        bgcolor: '#B80000',
        icon: 'info',
        title: '500',
        subtitle: 'Solved Incident Registered',
        link:"incidents"
      },
      {
        bgcolor: '#4F6F52',
        icon: 'priority_high',
        title: '50',
        subtitle: 'Knowledge Base',
        link:"knowledges"
      },
    );
  }



}

import { Component, OnInit } from '@angular/core';
import { Topcard } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-resource-dashboard',
  templateUrl: './resource-dashboard.component.html',
  styleUrls: ['./resource-dashboard.component.css']
})
export class ResourceDashboardComponent implements OnInit {

  topcardsResource: Topcard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.topcardsResource.push(
      {
        bgcolor: '#007bff',
        icon: 'store',
        title: '10,000',
        subtitle: 'Total Resources'
      },
      {
        bgcolor: '#ef5350',
        icon: 'shopping_cart',
        title: '5,000',
        subtitle: 'For Managers'
      },
      {
        bgcolor: '#66bb6a',
        icon: 'star',
        title: '500',
        subtitle: 'Personal Bankers'
      },
    );
  }



}

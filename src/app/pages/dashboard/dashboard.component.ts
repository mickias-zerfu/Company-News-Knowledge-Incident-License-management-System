import { Component, OnInit } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';



export interface Topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topcardsConstantine: Topcard[] = [];
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //     { data: [ 350, 450, 100 ], label: 'Series A' },
  //     { data: [ 50, 150, 120 ], label: 'Series B' },
  //     { data: [ 250, 130, 70 ], label: 'Series C' }
  //   ];

  // public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  //   responsive: false
  // };
  constructor() { }

  ngOnInit(): void {
    this.getConstantineData()
  }

  getConstantineData() {
    this.topcardsConstantine.push(
      {
        bgcolor: 'bg-red-500',
        icon: 'pi-spin pi-cog',
        title: '78,000',
        subtitle: ' Total Transaction'
      },
      {
        bgcolor: 'bg-red-900',
        icon: 'pi-money-bill',
        title: '28',
        subtitle: 'EthSwitch'
      },
      {
        bgcolor: 'bg-yellow-900',
        icon: 'pi-sign-out',
        title: '8',
        subtitle: 'RGTS'
      },
      {
        bgcolor: 'bg-violet-500',
        icon: 'pi-dollar',
        title: '4',
        subtitle: 'Bill Payment'
      },
      {
        bgcolor: 'bg-green-900',
        icon: 'pi-times-circle',
        title: '7',
        subtitle: 'Total Rejected'
      }
    )
  }
  public chartClicked(e: any): void {
  }
}

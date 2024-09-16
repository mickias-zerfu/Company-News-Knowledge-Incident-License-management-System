import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ExportingModule from 'highcharts/modules/exporting';
import SunsetTheme from 'highcharts/themes/sunset.js';
import * as Highcharts from "highcharts";

// The modules will work for all charts.
ExportingModule(Highcharts);
SunsetTheme(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato'
    }
  },
  legend: {
    enabled: false
  }
});

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements OnInit, OnChanges {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  @Input() data: { licenseCount: number, licenseManagerCount: number, softwareCount: number, expiredCount: number };

  optFromInput: Highcharts.Options;

  ngOnInit() {
    this.updateChartData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    if (this.data) {
      this.optFromInput = {
        chart: {
          type: 'pie',
          width: 500,   
          height: 400   
        },
        title: {
          text: 'Licenses Status'
        },
        plotOptions: {
          pie: {
            innerSize: '50%',  
            dataLabels: {
              enabled: true
            }
          }
        },
        credits: {
          enabled: false  
        },
        
        series: [{
          type: 'pie',
          name: 'Licenses',
          data: [
            { name: 'Active License Registered', y: this.data.licenseCount, color: '#a70000' },   
            { name: 'Expired License Registered', y: this.data.expiredCount, color: '#ff0000' },  
            { name: 'Software Products', y: this.data.softwareCount, color: '#ff5252' },         
            { name: 'License Managers', y: this.data.licenseManagerCount, color: '#ff7b7b' }    
          ]
        }]
      };

      this.updateFromInput = true; // Trigger chart update
    }
  }

  updateFromInput: boolean = false;

  // Demonstrate chart instance
  logChartInstance(chart: Highcharts.Chart) {
    // console.log('Chart instance: ', chart);
  }
}

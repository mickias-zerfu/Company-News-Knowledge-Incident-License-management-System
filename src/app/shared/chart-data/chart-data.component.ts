import { Component, ViewChild } from '@angular/core';
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
export class ChartDataComponent {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  optFromInputString: string = `
  {
    "title": { "text": "Licenses Status" },
    "series": [{
      "data": [11,2,3],
      "zones": [{
        "value": 7.2,
        "dashStyle": "dot",
        "color": "red"
      }]
    }, {
      "data": [5,6,7]
    }]
  }
  `;

  optFromInput: Highcharts.Options = JSON.parse(this.optFromInputString);
  updateFromInput: boolean = false;

  // Demonstrate chart instance
  logChartInstance(chart: Highcharts.Chart) {
    // console.log('Chart instance: ', chart);
  }


  seriesTypes: {[key: string]: string} = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line'
  };

}

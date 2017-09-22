import { Component } from '@angular/core';

import { ChartColours } from "./ChartColours";
import { LineChartFilters } from "../dataFilters/LineChartFilters";

@Component({
  selector: 'line-chart',
  templateUrl: './LineChart.html'
})

export class LineChart {
  data: any;
  options: any;
  type: string;
  apiData;
  constructor(private filters: LineChartFilters) {
    this.filters.avgSpendAgainstOutlet();
    this.setChartData();
    //this.apiData = this.http.apiData;
    //this.http.getData();
  }

  setChartData () {

    this.type = this.filters.chartType;
    this.data = {
      labels: this.filters.chartLabels,
      datasets: [
        {
          label: this.filters.dataSetLabels,
          backgroundColor: ChartColours.red,
          borderColor: ChartColours.redFull,
          data: this.filters.chartData
        }
      ]
    }
    this.options = {
      title: {
        display: true,
        text: this.filters.chartTitle,
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }

  public update (e) {
    this.filters.avgSpendPerDay();
    this.setChartData();
  }
}

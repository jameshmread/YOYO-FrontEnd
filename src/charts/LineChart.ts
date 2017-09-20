import { Component } from '@angular/core';

import { HttpService } from "../../services/HttpService";
import { ChartColours } from "./ChartColours";
import { LineChartFilters } from "../dataFilters/LineChartFilters";

@Component({
  selector: 'line-chart',
  templateUrl: './LineChart.html'
})

export class LineChart {
  type;
  data;
  options;
  apiData;
  constructor(private filters: LineChartFilters, private http: HttpService) {
    this.filters.getTotalSales();
    this.setChartData();
    this.apiData = this.http.apiData;
    this.http.getData();
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
    this.filters.getTotalSales();
    this.setChartData();
  }
}

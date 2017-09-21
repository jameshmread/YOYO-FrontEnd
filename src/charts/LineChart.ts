import { Component } from "@angular/core";

import { HttpService } from "../services/HttpService";
import { ChartColours } from "./ChartColours";
import { LineChartFilters } from "../dataFilters/LineChartFilters";
import { ChartTypes } from "./ChartTypes";

@Component({
  selector: "line-chart",
  templateUrl: "./LineChart.html"
})

export class LineChart {
  public chartTypes = ChartTypes.chartList;
  public type;
  public data;
  public options;

  constructor(private filters: LineChartFilters, private http: HttpService) {
    this.filters.getTotalSales();
    this.setChartData();
    this.http.getData();
  }

  public setChartData () {
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
    };
    this.options = {
      title: {
        display: true,
        text: this.filters.chartTitle,
        fontSize: 16
      },
      legend: {
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    };
  }

  private refreshChart (type: string) {
    this.type = type;
    this.data = this.refreshData();
    this.options = this.refreshOptions();
  }

  private update (event, newChartType: string) {
    this.type = newChartType;
    console.log(event);
    this.refreshChart(newChartType);
  }

  private refreshData (): Object {
    return {
      labels: this.filters.chartLabels,
      datasets: [
        {
          label: this.filters.dataSetLabels,
          backgroundColor: ChartColours.blueFull,
          borderColor: ChartColours.red,
          data: this.filters.chartData
        }
      ]
    };
  }

  private refreshOptions (): Object {
    return this.options = {
      title: {
        display: true,
        text: this.filters.chartTitle,
        fontSize: 16
      },
      legend: {
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    };
  }
}

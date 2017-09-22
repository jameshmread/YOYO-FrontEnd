import { Component } from "@angular/core";

import { HttpService } from "../services/HttpService";
import { ChartColours } from "./ChartColours";
import { LineChartFilters } from "../dataFilters/LineChartFilters";

import { IChartOptions } from "../interfaces/IChartOptions";
import { IChartData } from "../interfaces/IChartData";
import { ChartTypes } from "./ChartTypes";
import { PieDoughnut } from "../dataTypes/PieDoughnut";

@Component({
  selector: "chart",
  templateUrl: "./Chart.html",
  styleUrls: ["../app/app.component.css"]
})

export class Chart {
  public chartTypes: Array<string> = ChartTypes.chartList;
  public type: string;
  public data: IChartData;
  public options: IChartOptions;

  public chartFilters = this.filters.FILTER_LIST;

  constructor(private filters: LineChartFilters, private http: HttpService) {
    this.setBlankChart();
  }

  private setBlankChart() {
    this.type = ChartTypes.barChart;
    this.data = {
      labels: ["PlaceHolder 1", "PlaceHolder 2", "PlaceHolder 3"],
      datasets: [
        {
          label: "Placeholder",
          backgroundColor: ChartColours.red,
          borderColor: ChartColours.redFull,
          data: [0, 1, 2, 3]
        }
      ]
    };
    this.options = {
      title: {
        display: true,
        text: "PlaceHolder Title",
        fontSize: 16
      },
      legend: {
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    };
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

  // click method to change chart type
  public update (event, newChartType: string) {
    this.type = newChartType;
    this.data = this.refreshData(newChartType);
    this.options = this.refreshOptions();
  }

  private refreshData (chartType: string): IChartData {
    switch (chartType) {
      case ChartTypes.pieChart || ChartTypes.doughnutChart :
        return new PieDoughnut(
          this.filters.chartLabels,
          this.filters.chartData
        ).data;
      default:
      console.log("i got here");
      return {
        labels: this.filters.chartLabels,
        datasets: [
          {
            label: this.filters.dataSetLabels,
            backgroundColor: ChartColours.red,
            borderColor: ChartColours.blueFull,
            data: this.filters.chartData
          }
        ]
      };
    }
  }

  private refreshOptions (): IChartOptions {
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

  public chooseFilter(filter: string) {
    console.log(filter);
    switch (filter) {
      case (this.filters.FILTER_LIST[0]) :
        this.filters.getTotalSales();
      break;
      case (this.filters.FILTER_LIST[1]) :
        this.filters.getAverageSalesOfStores();
      break;
    }
    this.data = this.refreshData(this.filters.chartType);
    this.options = this.refreshOptions();
  }
}

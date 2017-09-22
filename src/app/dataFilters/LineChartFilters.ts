import { Injectable } from "@angular/core";

import { ChartTypes } from "../ChartTypes";
import { Filter } from "./Filter";
import { JsonFetcherService } from '../jsonFetcherService/JsonFetcherService';


@Injectable()
export class LineChartFilters extends Filter {

    data;

    constructor(private json: JsonFetcherService){
        super();
        //this.http.getData();
        json.fetch('http://localhost:8000/api/transactions/uniqueUsersPerStore');
        this.data = json.getData();
        console.log(json.getData());
    }


    public avgSpendAgainstOutlet () {
        const processedData = this.getAverageTotalSpentAgainstSeries("Outlet Name");
        this.setChartAttributes(
            processedData[0],
            "Average User's spend per Outlet",
            "Amount Spent (£)",
            processedData[1],
            ChartTypes.barChart
        )
    }

    public avgSpendPerDay () {
        const processedData = this.getAverageTotalSpentAgainstSeries("Date & Time");
        const days: Array<string> = [];
        //this.http.dateTimes.forEach(element => {
            //days.push(this.http.dateTimes[0].split(" ")[0]);
       // });
        this.setChartAttributes(
            processedData[0],
            "Daily Spending Trends of Users",
            "Amount Spent (£)",
            processedData[1],
            ChartTypes.lineChart
        )
    }

    private getAverageTotalSpentAgainstSeries (series: string): Array<any> {
        const seriesLabels = [];
        const totalAmounts = [];
        for (let i = 0; i < Object.keys(this.data).length; i++) {
            const outletNameIndex = seriesLabels.indexOf(this.data[i][series]);
            if (outletNameIndex < 0) {
                seriesLabels.push(this.data[i][series]);
                totalAmounts.push(Number(this.data[i]["Total Amount"]));
            } else {
                totalAmounts[outletNameIndex] += Number(this.data[i]["Total Amount"]);
            }
        }
        for (let i = 0; i < totalAmounts.length; i++){
            totalAmounts[i] = Number(Number(totalAmounts[i]).toFixed(2)); 
        }
        console.log([seriesLabels, totalAmounts]);
        return [seriesLabels, totalAmounts];
    }
}

import { Injectable } from "@angular/core";

import { HttpService } from "../services/HttpService";
import { ChartTypes } from "../charts/ChartTypes";
import { Filter } from "./Filter";
import { MathsFunctions } from "../maths/MathsFunctions";

@Injectable()
export class LineChartFilters extends Filter {

    public data;

    constructor(private http: HttpService) {
        super();
        this.http.getData();
        this.http.data.subscribe((data) => {
            this.data = data;
            console.log("ababab", this.data);
            this.getTotalSales();
        });
    }

    public avgSpendPerDay () {
        const processedData = this.getAverageTotalSpentAgainstSeries("Date & Time");
        const days: Array<string> = [];
        this.http.dateTimes.forEach(element => {
            days.push(this.http.dateTimes[0].split(" ")[0]);
        });
        this.setChartAttributes(
            processedData[0],
            "Daily Spending Trends of Users",
            "Amount Spent (£)",
            processedData[1],
            ChartTypes.lineChart
        );
    }

    private getAverageTotalSpentAgainstSeries (series: string): Array<any> {
        const seriesLabels = [];
        let totalAmounts = [];
        for (let i = 0; i < Object.keys(this.data).length; i++) {
            const outletNameIndex = seriesLabels.indexOf(this.data[i][series]);
            if (outletNameIndex < 0) {
                seriesLabels.push(this.data[i][series]);
                totalAmounts.push(Number(this.data[i]["Total Amount"]));
            } else {
                totalAmounts[outletNameIndex] += Number(this.data[i]["Total Amount"]);
            }
        }
        totalAmounts = MathsFunctions.roundArrayContents(totalAmounts, 2);

        console.log([seriesLabels, totalAmounts]);
        return [seriesLabels, totalAmounts];
    }

    public getTotalSales () {
        const totalStores: Set<string> = new Set();
        let totalSales = [];
        for (let i = 1; i < Object.keys(this.data).length; i++) {
            totalStores.add(this.data[i]["outlet_name"]);
        }
        let index = 0;
        totalStores.forEach((store) => {
            for (let i = 0; i < Object.keys(this.data).length; i++) {
                if (this.data[i]["outlet_name"] === store) {
                    if (totalSales[index] === void 0) {
                        totalSales.push(0);
                    }
                    totalSales[index] += Number(this.data[i]["total_amount"]);
                }
            }
            index ++;
        });
        totalSales = MathsFunctions.roundArrayContents(totalSales, 2);
        this.setChartAttributes(
            Array.from(totalStores),
            "Total Sales Per Outlet",
            "Amount Spent (£)",
            totalSales,
            ChartTypes.barChart
        );
        console.log(totalStores, totalSales);
    }
}

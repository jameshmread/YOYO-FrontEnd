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

    }

    public getTotalSales() {
        this.http.getData("transactions/totalsales");
        this.http.data.subscribe((data) => {
            const info = this.createLabelDataArrays(
                Object.keys(data).length,
                data,
                "outlet_name",
                "total_sales"
            );
            this.setChartAttributes(
                info[0],
                "Total Transaction Value Per Outlet",
                "Amount Spent (£)",
                info[1],
                ChartTypes.barChart
            );
        });
    }

    public getAverageSalesOfStores() {
        this.http.getData("transactions/averagesales");
        this.http.data.subscribe((data) => {
           const info = this.createLabelDataArrays(
               Object.keys(data).length,
               data,
               "outlet_name",
               "average_transaction_value"
           );
            this.setChartAttributes(
                info[0],
                "Average Transaction Value Per Outlet",
                "Amount Spent (£)",
                info[1],
                ChartTypes.barChart
            );
        });
    }

    private createLabelDataArrays (
        arrayLength: number,
        data: Object,
        labelName: string, dataName: string
    ) {
        const labels: Array<string> = [];
        const chartData: Array<number> = [];
        for (let i = 0; i < arrayLength; i++) {
            labels.push(data[i][labelName]);
            chartData.push(data[i][dataName]);
        }
        return [labels, chartData];
    }
    
    public getUniqueUsersPerStore () {
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
                    totalSales[index] += 1;
                }
            }
            index ++;
        });
        this.setChartAttributes(
            Array.from(totalStores),
            "User Retention",
            "Amount Spent (£)",
            totalSales,
            ChartTypes.barChart
        );
        console.log(totalStores, totalSales);
    }
}

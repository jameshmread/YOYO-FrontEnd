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

    public getAverageSalesOfStores(startDate: Date, endDate: Date) {
        this.http.getData("transactions/averagesales");
        this.http.data.subscribe((data) => {
            const filteredData = this.averageSalesOverTime(data, startDate, endDate);
            const chartLabels = [];
            const chartData = [];
            for (let i = 0; i < filteredData.length; i++) {
                chartLabels.push(filteredData[i][0]);
                chartData.push(filteredData[i][1]);
            }
            this.setChartAttributes(
                chartLabels,
                "Average Transaction Value from: " + startDate + " to " + endDate,
                "Amount Spent (£)",
                chartData,
                ChartTypes.barChart
            );
        });
    }

    public averageSalesOverTime(data: Object, start: Date, end: Date): Array<Array<any>> {
        const saleRange = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            const outletName = Object.keys(data[i]).toString();
            let outletValue = 0;
            const entry = data[i][outletName.toString()];
            for (let j = 0; j < entry.length; j++) {
                const currentDate = new Date(entry[j]["date"].toString().split(" ")[0]);
                if (currentDate >= start && currentDate <= end) {
                    outletValue += Number(entry[j]["total_amount"]);
                }
            }
            saleRange.push([outletName, outletValue ]);
        }
        return saleRange;
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
}

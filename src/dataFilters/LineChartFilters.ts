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
            //this.getTotalSales();
        });
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

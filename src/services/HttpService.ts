import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

// import * as data from "../testData.json";

@Injectable()
export class HttpService {
    public data: Subject<Object> = new Subject<Object>();
    public arrayOfDataNames = [
        "Date & Time",
        "Retailer Ref",
        "Retailer Name",
        "Outlet Ref",
        "Outlet Name",
        "New user id",
        "Transaction Type",
        "Cash Spent",
        "Discount Amount",
        "Total Amount"
    ];

    public dateTimes: Array<string> = [];
    public retailerIds = [];
    public retailerNames = [];
    public outletIds = [];
    public outletNames = [];
    public userIDs = [];
    public transactionTypes = [];
    public cashSpents = [];
    public discountAmounts = [];
    public totalAmounts = [];

    // don"t know the data types for sure currently...

    constructor(private http?: HttpClient) {}

    public getData (endpoint?: string) {
        // using json as cross origin issues are happening
        // will change to get requests when integrated with backend code
        return this.http.get("http://127.0.0.1:8000/api/transactions/totalsales")
            .subscribe((response) => {
                console.log("response", response);
                this.data.next(response);
            },
            (error) => { console.log("Error happened" + error); },
            () => { console.log("the subscription is completed"); }
            );
    }

    private parseData () {
        for (let i = 0; i < Object.keys(this.data).length; i++) {
            this.dateTimes[i] = this.data[i]["Date & Time"];

            this.retailerIds[i] = this.data[i]["Retailer Ref"];
            this.retailerNames[i] = this.data[i]["Retailer Name"];
            this.outletIds[i] = this.data[i]["Outlet Ref"];
            this.outletNames[i] = this.data[i]["Outlet Name"];

            this.userIDs[i] = this.data[i]["New user id"];
            this.transactionTypes[i] = this.data[i]["Transaction Type"];
            this.cashSpents[i] = this.data[i]["Cash Spent"];
            this.discountAmounts[i] = this.data[i]["Discount Amount"];
            this.totalAmounts[i] = this.data[i]["Total Amount"];
        }
        //  console.log("dates", this.dateTimes);
        //  console.log("users", this.userIDs);
        //  console.log("outlet", this.outletNames);
        //  console.log("retailers", this.retailerNames);
        //  console.log("transaction types", this.transactionTypes);
        //  console.log("cash spents", this.cashSpents);
        //  console.log("discounts", this.discountAmounts);
        //  console.log("totals", this.totalAmounts);
    }
}

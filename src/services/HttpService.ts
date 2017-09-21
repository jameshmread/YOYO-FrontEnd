import { Injectable } from '@angular/core';
import { HttpModule, Response } from '@angular/http';

import * as data from "../testData.json";

@Injectable()
export class HttpService {
    data;
    arrayOfDataNames = [
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
    ]
    
    dateTimes: Array<string> = [];
    retailerIds = [];
    retailerNames = [];
    outletIds = [];
    outletNames = [];
    userIDs = [];
    transactionTypes = [];
    cashSpents = [];
    discountAmounts = [];
    totalAmounts = [];

    //don't know the data types for sure currently...

    constructor(private http?: HttpModule){}

    getData (endpoint?: string) {
        //using json as cross origin issues are happening
        //will change to get requests when integrated with backend code
        // this.apiData = this.http.get("api/transactions/recent")
        // .subscribe(res => res.json());
        this.parseData();
        this.data = data;
    }

    parseData () {
        for (let i = 0; i < Object.keys(data).length; i++){
            this.dateTimes[i] = data[i]["Date & Time"];
            
            this.retailerIds[i] = data[i]["Retailer Ref"]
            this.retailerNames[i] = data[i]["Retailer Name"]
            this.outletIds[i] = data[i]["Outlet Ref"]
            this.outletNames[i] = data[i]["Outlet Name"]
            
            this.userIDs[i] = data[i]["New user id"];
            this.transactionTypes[i] = data[i]["Transaction Type"];
            this.cashSpents[i] = data[i]["Cash Spent"];
            this.discountAmounts[i] = data[i]["Discount Amount"];
            this.totalAmounts[i] = data[i]["Total Amount"];
        }
        // console.log("dates", this.dateTimes);
        // console.log("users", this.userIDs);
        // console.log("outlet", this.outletNames);
        // console.log("retailers", this.retailerNames);
        // console.log("transaction types", this.transactionTypes);
        // console.log("cash spents", this.cashSpents);
        // console.log("discounts", this.discountAmounts);
        // console.log("totals", this.totalAmounts);
    }
}
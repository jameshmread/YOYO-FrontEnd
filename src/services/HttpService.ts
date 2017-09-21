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
        // http://127.0.0.1:8000/api/transactions/averagesales
        return this.http.get("http://127.0.0.1:8000/api/transactions/totalsales")
            .subscribe((response) => {
                console.log("response", response);
                this.data.next(response);
            },
            (error) => { console.log("Error happened" + error); },
            () => { console.log("the subscription is completed"); }
            );
    }
}

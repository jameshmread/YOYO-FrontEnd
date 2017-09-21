import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

@Injectable()
export class HttpService {
    public data: Subject<Object> = new Subject<Object>();

    constructor(private http?: HttpClient) {}

    public getData (endpoint: string) {
        return this.http.get("http://127.0.0.1:8000/api/" + endpoint)
            .subscribe((response) => {
                this.data.next(response);
            },
            (error) => {
                console.log("Could not retrieve data", error);
            },
            () => {
                console.log("Success");
            }
            );
    }
}

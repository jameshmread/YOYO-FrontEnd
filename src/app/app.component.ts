import { Component } from "@angular/core";


import { SelectItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public storeData: boolean;
  public options: Array<string> = [
    "Daily Report",
    "Tribe Data",
    "Store Data"
  ];

  public onOptionClick(option: string) {
    this.storeData = true;
  }
}

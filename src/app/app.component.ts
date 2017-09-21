import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public options: Array<string> = [
    "Daily Report",
    "Tribe Data",
    "Store Data"
  ];

  public onOptionClick(option: string) {
  }
}

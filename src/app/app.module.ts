import "reflect-metadata";
import "zone.js/dist/zone";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SelectButtonModule, ChartModule } from "primeng/primeng";

import { AppComponent } from "./app.component";
import { LineChart } from "../charts/LineChart";
import { LineChartFilters } from "../dataFilters/LineChartFilters";
import { HttpService } from "../services/HttpService";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LineChart
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SelectButtonModule,
    ChartModule
  ],
  providers: [
    LineChartFilters,
    HttpService,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

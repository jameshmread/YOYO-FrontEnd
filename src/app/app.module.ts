import "reflect-metadata";
import "zone.js/dist/zone";
import "rxjs/add/operator/map";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SelectButtonModule, ChartModule } from "primeng/primeng";

import { AppComponent } from "./app.component";
import { Chart } from "../charts/Chart";
import { LineChartFilters } from "../dataFilters/LineChartFilters";
import { HttpService } from "../services/HttpService";

@NgModule({
  declarations: [
    AppComponent,
    Chart
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SelectButtonModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [
    LineChartFilters,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

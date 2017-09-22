import "reflect-metadata";
import "zone.js/dist/zone";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { JsonFetcherService } from './jsonFetcherService/JsonFetcherService';
import { JsonFetcherExample } from './jsonFetcherExample/JsonFetcherExample';
import { LineChart } from './charts/LineChart';


import { AppComponent } from "./app.component";
@NgModule({
  declarations: [
    AppComponent,
    JsonFetcherExample,
    LineChart
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
   JsonFetcherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

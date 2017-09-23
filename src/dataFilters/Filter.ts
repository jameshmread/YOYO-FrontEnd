export class Filter {

    public readonly FILTER_LIST = [
        "Total Revenue Per Store",
        "Average Transaction Value Per Store",
        "",
        "Unique Users Per Store"
        ];

        public chartLabels: Array<string | number>;
        public chartTitle: string;
        public dataSetLabels: string;
        public chartData: Array<number | string>;
        public chartType: string;

    public setChartAttributes(
        labels: Array<string | number>,
        chartTitle: string,
        dataSetLabels: string,
        chartData: Array<number | string>,
        chartType: string
    ) {
        this.chartLabels = labels;
        this.chartTitle = chartTitle;
        this.dataSetLabels = dataSetLabels;
        this.chartData = chartData;
        this.chartType = chartType;
        console.log("dd", labels, chartData);
    }
    public getTotalSales() {}
    public getAverageSalesOfStores(startDate: Date, endDate: Date) {}
    public getAverageSalesOverTime() {}

}

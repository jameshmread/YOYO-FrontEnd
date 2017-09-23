export class Filter {

    public readonly FILTER_LIST = [
        "Total Revenue Per Store",
        "Average Transaction Value Per Store"
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
    }
    public getTotalSales() {}
    public getAverageSalesOfStores() {}

    public averageSalesOverTime (data: any, start: Date, end: Date) {
        const saleRange = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            const outletName = Object.keys(data[i]).toString();
            console.log(outletName);
            let outletValue = 0;
            const entry = data[i][outletName.toString()];
            for (let j = 0; j < entry.length; j++) {
                const currentDate = new Date(entry[j]["date"].toString().split(" ")[0]);
                if (currentDate >= start && currentDate <= end) {
                    outletValue += Number(entry[j]["total_amount"]);
                }
                // console.log(entry[j]["total_amount"], new Date(entry[j]["date"].toString().split(" ")[0]));
                console.log(outletName, outletValue);

            }
            saleRange.push([outletName, outletValue]);
        }
        console.log("hello", saleRange);
    }
}

export class Filter {

    public readonly FILTER_LIST = [
        "Total Revenue Per Store",
        "Average Transaction Value Per Store"
        ];

        public chartLabels;
        public chartTitle: string;
        public dataSetLabels: string;
        public chartData: Array<number>;
        public chartType: string;

    public setChartAttributes(
        labels: Array<string>,
        chartTitle: string,
        dataSetLabels: string,
        chartData: Array<number>,
        chartType: string
    ) {
        this.chartLabels = labels;
        this.chartTitle = chartTitle;
        this.dataSetLabels = dataSetLabels;
        this.chartData = chartData;
        this.chartType = chartType;
    }
}

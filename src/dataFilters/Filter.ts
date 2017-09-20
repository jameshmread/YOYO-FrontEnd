export class Filter {
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
        this.chartTitle = chartTitle
        this.dataSetLabels = dataSetLabels
        this.chartData = chartData;
        this.chartType = chartType;
    }
}
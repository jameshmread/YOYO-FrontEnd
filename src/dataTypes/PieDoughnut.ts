import { ChartColours } from "../charts/ChartColours";

export class PieDoughnut {
    public data;
    constructor (
        labels: Array<string | number>,
        datasets: Array<number | string>
    ) {
        this.data = {
            labels: labels,
            datasets: [
                {
                    data: datasets,
                    backgroundColor: ChartColours.getChartColours(datasets.length),
                    hoverBackgroundColor: ChartColours.getChartColours(datasets.length)
                }]
        };
    }

}

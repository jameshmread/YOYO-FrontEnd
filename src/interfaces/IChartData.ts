export interface IChartData {

    labels: Array<string>;
    datasets: [
        {
            label: string;
            backgroundColor: string;
            borderColor: string,
            data: Array<number>;
        }
    ];
}

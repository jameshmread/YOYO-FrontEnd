export interface IChartData {

    labels: Array<string | number>;
    datasets: [
        {
            label: string;
            backgroundColor: string;
            borderColor: string,
            data: Array<number | string>;
        }
    ];
}

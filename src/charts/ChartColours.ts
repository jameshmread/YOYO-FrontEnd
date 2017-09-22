export class ChartColours {
    public static grey = "rgba(255,105,180, 0.5)";
    public static red = "rgba(240,20,30, 0.5)";
    public static redFull = "rgba(255,0,0, 1)";
    public static blueFull = "rgba(20,30,255, 1)";
    public static noFill = "rgba(0,0,0,0)";
    public static pink = "rgba(255,0,127,1)";
    public static cyan = "rgba(0,255,255,1)";
    public static green = "rgba(51,255,51,1)";
    public static black = "rgba(0,0,0,1)";
    public static yellow = "rgba(255,255,51,1)";
    public static colourList = [
        "rgba(255,0,0, 1)",
        "rgba(255,255,0, 1)",
        "rgba(255,0,255, 1)",
        "rgba(0,255,0, 1)",
        "rgba(100,255,255,1)",
        "rgba(100,100,255,1)",
        "rgba(100,100,100,1)",
        "rgba(0,100,0,1)",
        "rgba(255,255,51,1)"
    ];

    public static getChartColours(datasetLength: number) {
        const colours = [];
        const colourList = ChartColours.colourList;
        let index = 0;
        for (let i = 0; i < datasetLength; i++) {
            if (index >= colourList.length - 1) {
                index = 0;
            }
            colours.push(colourList[index]);
            index++;
        }
        console.log(colours);
        return colours;
    }
}

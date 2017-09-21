export class MathsFunctions {

    public static roundArrayContents(inputArray: Array<any>, decimalPlaces: number): Array<number> {
        for (let i = 0; i < inputArray.length; i++) {
            inputArray[i] = Number(Number(inputArray[i]).toFixed(decimalPlaces));
        }
        return inputArray;
    }
}

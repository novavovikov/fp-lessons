import { generateArray, generateArray2 } from "./generate-array";

describe("generateArray", () => {
    it("should return a valid array", () => {
        expect(generateArray(3)).toEqual([0, 1, 2]);
        expect(generateArray(6)).toEqual([0, 1, 2, 3, 4, 5]);

        expect(generateArray2(3)).toEqual([0, 1, 2]);
        expect(generateArray2(6)).toEqual([0, 1, 2, 3, 4, 5]);
    });
});

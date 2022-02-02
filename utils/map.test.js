import { map, map2, map3 } from "./map";

const INITIAL_ARRAY = [1, 2, 3, 4];

describe("map", () => {
    it("should return an empty array", () => {
        expect(map([], (item) => item + 1)).toEqual([]);
        expect(map2([], (item) => item + 1)).toEqual([]);
        expect(map3([], (item) => item + 1)).toEqual([]);
    });

    it("should return a mapped array", () => {
        expect(map(INITIAL_ARRAY, (item) => item * 2)).toEqual([2, 4, 6, 8]);
        expect(map2(INITIAL_ARRAY, (item) => item * 2)).toEqual([2, 4, 6, 8]);
    });
});

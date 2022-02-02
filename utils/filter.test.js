import { filter, filter2 } from "./filter";

const INITIAL_ARRAY = [1, 2, 3, 4];

describe("filter", () => {
    it("should return an array without one value", () => {
        expect(filter(INITIAL_ARRAY, (item) => item !== 1)).toEqual([2, 3, 4]);
        expect(filter(INITIAL_ARRAY, (item) => item !== 2)).toEqual([1, 3, 4]);
        expect(filter(INITIAL_ARRAY, (item) => item !== 3)).toEqual([1, 2, 4]);
        expect(filter(INITIAL_ARRAY, (item) => item !== 4)).toEqual([1, 2, 3]);

        expect(filter2(INITIAL_ARRAY, (item) => item !== 1)).toEqual([2, 3, 4]);
        expect(filter2(INITIAL_ARRAY, (item) => item !== 2)).toEqual([1, 3, 4]);
        expect(filter2(INITIAL_ARRAY, (item) => item !== 3)).toEqual([1, 2, 4]);
        expect(filter2(INITIAL_ARRAY, (item) => item !== 4)).toEqual([1, 2, 3]);
    });

    it("should return an empty array", () => {
        expect(filter(INITIAL_ARRAY, () => false)).toEqual([]);
        expect(filter([], () => true)).toEqual([]);
    });

    it("should return an initial array", () => {
        expect(filter(INITIAL_ARRAY, () => true)).toEqual(INITIAL_ARRAY);
        expect(
            filter(INITIAL_ARRAY, (item) => INITIAL_ARRAY.includes(item))
        ).toEqual(INITIAL_ARRAY);
    });
});

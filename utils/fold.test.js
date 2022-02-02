import { foldL, foldR } from "./fold";

const INITIAL_ARRAY = [1, 2, 3, 4];

describe("fold", () => {
    it("foldL", () => {
        expect(
            foldL(INITIAL_ARRAY, (acc, item) => [...acc, item * 2], [])
        ).toEqual([2, 4, 6, 8]);
    });

    it("foldR", () => {
        expect(
            foldR(INITIAL_ARRAY, (acc, item) => [item * 2, ...acc], [])
        ).toEqual([2, 4, 6, 8]);
    });
});

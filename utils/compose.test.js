import { compose } from "./compose";

describe("compose", () => {
    it("should return a valid value", () => {
       const sum = (a) => a + a
       const multiply = (a) => a * a

        expect(compose(sum, multiply)(1)).toEqual(4)
        expect(compose(sum, multiply)(2)).toEqual(16)

        expect(compose(multiply, sum)(1)).toEqual(2)
        expect(compose(multiply, sum)(2)).toEqual(8)
    });
});

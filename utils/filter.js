import { foldL } from "./fold";

export function filter(arr, f) {
    const recursion = ([x, ...xs], f, acc = []) =>
        x == null ? acc : recursion(xs, f, f(x) ? [...acc, x] : acc);

    return recursion(arr, f);
}

export const filter2 = (arr, f) =>
    foldL(arr, (acc, item) => (f(item) ? [...acc, item] : acc), []);

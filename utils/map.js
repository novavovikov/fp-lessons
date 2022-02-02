import { foldL } from "./fold";

export function map(arr, f) {
    const recursion = ([x, ...xs], f, acc = []) =>
        x == null ? acc : recursion(xs, f, [...acc, f(x)]);

    return recursion(arr, f);
}

export const map2 = ([x, ...xs], f) =>
    x == null ? [] : [f(x), ...map2(xs, f)];

export const map3 = (arr, f) =>
    foldL(arr, (acc, item) => [...acc, f(item)], []);

export const foldL = ([x, ...xs], f, acc) =>
    x == null ? acc : foldL(xs, f, f(acc, x));

export const foldR = ([x, ...xs], f, acc) =>
    x == null ? acc : f(foldR(xs, f, acc), x);

const show = (x, y) => ["(", x, "+", y, ")"].join("");

// for left assoc we show acc on left
const showL = show;

// for right assoc we show acc on right
const showR = (acc, item) => show(item, acc);

// console.log("foldL", foldL([1, 2, 3, 4], showL, "0"));

// console.log("foldR", foldR([1, 2, 3, 4], showR, "0"));

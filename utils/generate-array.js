export function generateArray(n) {
    const f = (idx, acc) => (idx < 0 ? acc : f(idx - 1, [idx, ...acc]));
    return f(n - 1, []);
}

// TOC - tail call optimization;
export const generateArray2 = (n) =>
    n === 0 ? [] : [...generateArray2(n - 1), n - 1];

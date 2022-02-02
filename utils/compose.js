import {foldL} from "./fold";

export const compose = (...args) => (init) => {
    return foldL(args, (acc, fn) => fn(acc), init)
}
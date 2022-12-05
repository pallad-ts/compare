import {Result} from "./Result";

export type Comparator<T> = (a: T, b: T) => number | Result;

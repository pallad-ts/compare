import {Result} from './Result';
import {Comparable} from './Comparable';
import {Equal} from './Equal';
import {Less} from './Less';
import {Greater} from './Greater';
import {Comparator} from "./Comparator";

export type Compare<T> = (a: T, b: T) => Result;
export type CompareStruct<T> = Compare<T> & {
	reverse: Compare<T>;
}

export function createCompareWithComparator<T>(comparator: Comparator<T>): CompareStruct<T> {
	const func = (a: T, b: T) => {
		return compare(a, b, comparator);
	};
	func.reverse = (a: T, b: T) => {
		return func(a, b).reverse;
	};
	return func;
}

export function compare<T>(a: T, b: T, comparator?: Comparator<T>): Result {
	if (comparator) {
		const result = comparator(a, b);
		return Result.is(result) ? result : Result.fromSortResult(result);
	}

	if (Comparable.is(a) && Comparable.is(b)) {
		return a.compare(b);
	}

	// eslint-disable-next-line eqeqeq
	if (a == b) {
		return Equal
	} else if (a < b) {
		return Less;
	}
	return Greater;
}

compare.reverse = function <T>(a: T, b: T, comparator?: Comparator<T>): Result {
	return compare(a, b, comparator).reverse;
}

import {ComparisonResult} from './ComparisonResult';
import * as is from 'predicates';

const isComparable = is.struct({
	compare: Function
});

export interface Comparable<T> {
	compare(another: T): ComparisonResult;
}

export namespace Comparable {
	export function is<T>(value: any): value is Comparable<T> {
		return isComparable(value);
	}
}

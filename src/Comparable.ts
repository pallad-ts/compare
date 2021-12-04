import * as is from 'predicates';
import {Result} from './Result';

const isComparable = is.struct({
	compare: Function
});

export interface Comparable<T> {
	compare(another: T): Result;
}

export namespace Comparable {
	export function is<T>(value: any): value is Comparable<T> {
		return isComparable(value);
	}
}

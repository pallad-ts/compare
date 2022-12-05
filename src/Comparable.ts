import {Result} from './Result';

function isComparable<T>(value: unknown): value is Comparable<T> {
	// eslint-disable-next-line no-null/no-null
	return typeof value === 'object' && value !== null && (value as any).compare instanceof Function;
}

export interface Comparable<T> {
	compare(another: T): Result;
}

export namespace Comparable {
	export function is<T>(value: any): value is Comparable<T> {
		return isComparable(value);
	}
}

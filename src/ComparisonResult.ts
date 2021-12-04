import {Less} from './Less';
import {Equal} from './Equal';
import {Greater} from './Greater';

export type ComparisonResult = typeof Less | typeof Equal | typeof Greater;

export namespace ComparisonResult {
	export function fromSortResult(sortResult: number): ComparisonResult {
		if (sortResult === 0) {
			return Equal;
		} else if (sortResult < 0) {
			return Less;
		}
		return Greater;
	}
}

import {Less} from './Less';
import {Equal} from './Equal';
import {Greater} from './Greater';

export type Result = typeof Less | typeof Equal | typeof Greater;

export namespace Result {
	export function fromSortResult(sortResult: number): Result {
		if (sortResult === 0) {
			return Equal;
		} else if (sortResult < 0) {
			return Less;
		}
		return Greater;
	}
}

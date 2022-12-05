import {Less} from './Less';
import {Equal} from './Equal';
import {Greater} from './Greater';
import {createMap} from "./factory/createMap";

export interface Result {
	readonly type: 'less' | 'greater' | 'equal',
	readonly isLess: boolean,
	readonly isEqual: boolean,
	readonly isNotEqual: boolean,
	readonly isLessOrEqual: boolean,
	readonly isGreaterOrEqual: boolean,
	readonly isGreater: boolean,
	readonly map: ReturnType<typeof createMap>,
	readonly sortResult: -1 | 0 | 1,
	readonly sortResultReversed: -1 | 0 | 1,

	get reverse(): Result;

	valueOf(): -1 | 0 | 1
}

export namespace Result {
	export function is(result: unknown): result is Result {
		return result === Less || result === Greater || result === Equal;
	}

	export function fromSortResult(sortResult: number): Result {
		if (sortResult === 0) {
			return Equal;
		} else if (sortResult < 0) {
			return Less;
		}
		return Greater;
	}
}

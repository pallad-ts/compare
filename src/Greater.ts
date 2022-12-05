import {createMap} from './factory/createMap';
import {Less} from './Less';
import {Result} from "./Result";

export const Greater = Object.freeze({
	type: 'greater',
	isLess: false,
	isEqual: false,
	isNotEqual: true,
	isLessOrEqual: false,
	isGreaterOrEqual: true,
	isGreater: true,
	map: createMap((less, equal, greater) => {
		return greater;
	}),
	get reverse(): Result {
		return Less;
	},
	sortResult: 1,
	sortResultReversed: -1,
	valueOf() {
		return 1 as const;
	}
}) as Result;

import {createMap} from './factory/createMap';
import {Result} from "./Result";

export const Equal = Object.freeze({
	type: 'equal',
	isLess: false,
	isEqual: true,
	isNotEqual: false,
	isLessOrEqual: true,
	isGreaterOrEqual: true,
	isGreater: false,
	map: createMap((less, equal) => {
		return equal;
	}),
	get reverse(): Result {
		return Equal;
	},
	sortResult: 0,
	sortResultReversed: 0,
	valueOf() {
		return 0 as const;
	}
}) as Result;

import {createMap} from './factory/createMap';

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
	sortResult: 0,
	sortResultReversed: 0,
	valueOf() {
		return 0 as const;
	}
} as const);

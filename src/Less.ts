import {createMap} from './factory/createMap';

export const Less = Object.freeze({
	type: 'less',
	isLess: true,
	isEqual: false,
	isNotEqual: true,
	isLessOrEqual: true,
	isGreaterOrEqual: false,
	isGreater: false,
	map: createMap(less => {
		return less;
	}),
	sortResult: -1,
	sortResultReversed: 1,
	valueOf() {
		return -1 as const;
	}
} as const);

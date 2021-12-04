import {createMap} from './factory/createMap';

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
	sortResult: 1,
	sortResultReversed: -1,
	valueOf() {
		return 1 as const;
	}
} as const);

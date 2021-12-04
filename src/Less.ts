import {Mapping} from './Mapping';

export const Less = Object.freeze({
	type: 'less',
	isLess: true,
	isEqual: false,
	isNotEqual: true,
	isLessOrEqual: true,
	isGreaterOrEqual: false,
	isGreater: false,
	map<T1, T2, T3>(mapping: Mapping<T1, T2, T3>): T1 | T2 | T3 {
		return mapping.less;
	},
	sortResult: -1 as const,
	valueOf() {
		return -1 as const;
	}
} as const);

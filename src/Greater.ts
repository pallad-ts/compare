import {Mapping} from './Mapping';

export const Greater = Object.freeze({
	type: 'greater',
	isLess: false,
	isEqual: false,
	isNotEqual: true,
	isLessOrEqual: false,
	isGreaterOrEqual: true,
	isGreater: true,
	map<T1, T2, T3>(mapping: Mapping<T1, T2, T3>): T1 | T2 | T3 {
		return mapping.greater;
	},
	sortResult: 1 as const,
	valueOf() {
		return 1 as const;
	}
} as const);

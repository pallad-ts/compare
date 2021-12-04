import {Mapping} from './Mapping';

export const Equal = Object.freeze({
	type: 'equal',
	isLess: false,
	isEqual: true,
	isNotEqual: false,
	isLessOrEqual: true,
	isGreaterOrEqual: true,
	isGreater: false,
	map<T1, T2, T3>(mapping: Mapping<T1, T2, T3>): T1 | T2 | T3 {
		return mapping.equal;
	},
	sortResult: 0 as const,
	valueOf() {
		return 0 as const;
	}
} as const);

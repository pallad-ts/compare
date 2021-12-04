import {Mapping} from '../Mapping';

export function createMap(fn: (less: any, equal: any, greater: any) => any) {

	function result<T1, T2, T3>(less: T1, equal: T2, greater: T3): (T1 | T2 | T3);
	function result<T1, T2, T3>(mapping: Mapping<T1, T2, T3>): (T1 | T2 | T3);
	function result<T1, T2, T3>(mappingOrLess: Mapping<T1, T2, T3> | T1, equal?: T2, greater?: T3): (T1 | T2 | T3) {
		if (arguments.length > 1) {
			return fn(mappingOrLess as T1, equal as T2, greater as T3);
		}

		const mapping = mappingOrLess as Mapping<T1, T2, T3>;
		return fn(mapping.less, mapping.equal, mapping.greater);
	}

	return result;
}


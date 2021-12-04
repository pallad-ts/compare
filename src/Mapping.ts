export interface Mapping<T1, T2, T3> {
	less: T1;
	equal: T2;
	greater: T3;
}

export namespace Mapping {
	export interface Fn<T1, T2, T3> {
		(less: T1, equal: T2, greater: T3): (T1 | T2 | T3);

		(mapping: Mapping<T1, T2, T3>): (T1 | T2 | T3);
	}
}

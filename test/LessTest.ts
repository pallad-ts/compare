import {assert, IsExact} from 'conditional-type-checks';
import {Less} from '@src/Less';
import {Mapping} from '@src/Mapping';
import {Result} from '@src/Result';
import {Greater} from '@src/Greater';

describe('Less', () => {
	it('type', () => {
		assert<IsExact<{
			type: 'less',
			isLess: true,
			isLessOrEqual: true,
			isNotEqual: true,
			isEqual: false,
			isGreater: false,
			isGreaterOrEqual: false,
			sortResult: -1,
			sortResultReversed: 1,
			reverse: Result,
			map: <T1, T2, T3>(mapping: Mapping<T1, T2, T3>) => T1 | T2 | T3,
			valueOf(): -1,
		}, typeof Less>>(true)
	});

	it('valueOf', () => {
		expect(+Less).toEqual(-1);
	});

	it('reversed', () => {
		expect(Less.reverse).toEqual(Greater);
	})

	describe('map', () => {
		describe('as', () => {
			describe('object', () => {
				it('test', () => {
					expect(Less.map({less: 1, equal: 0, greater: 0}))
						.toEqual(1);
				});

				it('types', () => {
					const result = Less.map({less: 1, equal: 2, greater: 3} as const);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});

			describe('arguments', () => {
				it('test', () => {
					expect(Less.map(1, 0, 0))
						.toEqual(1);
				});

				it('types', () => {
					const result = Less.map(1, 2, 3);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});
		});
	});
});

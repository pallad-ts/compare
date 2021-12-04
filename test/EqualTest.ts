import {assert, IsExact} from 'conditional-type-checks';
import {Equal} from '@src/Equal';
import {Mapping} from '@src/Mapping';

describe('Equal', () => {
	it('type', () => {
		assert<IsExact<{
			type: 'equal',
			isLess: false,
			isLessOrEqual: true,
			isNotEqual: false,
			isEqual: true,
			isGreater: false,
			isGreaterOrEqual: true,
			sortResult: 0,
			sortResultReversed: 0,
			map: <T1, T2, T3>(mapping: Mapping<T1, T2, T3>) => T1 | T2 | T3,
			valueOf(): 0,
		}, typeof Equal>>(true)
	});

	it('valueOf', () => {
		expect(+Equal).toEqual(0);
	});

	describe('map', () => {
		describe('as', () => {
			describe('object', () => {
				it('test', () => {
					expect(Equal.map({less: 0, equal: 1, greater: 0}))
						.toEqual(1);
				});

				it('types', () => {
					const result = Equal.map({less: 1, equal: 2, greater: 3} as const);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});

			describe('arguments', () => {
				it('test', () => {
					expect(Equal.map(0, 1, 0))
						.toEqual(1);
				});

				it('types', () => {
					const result = Equal.map(1, 2, 3);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});
		});
	});
});

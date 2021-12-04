import {assert, IsExact} from 'conditional-type-checks';
import {Greater} from '@src/Greater';
import {Mapping} from '@src/Mapping';

describe('Greater', () => {
	it('type', () => {
		assert<IsExact<{
			type: 'greater',
			isLess: false,
			isLessOrEqual: false,
			isNotEqual: true,
			isEqual: false,
			isGreater: true,
			isGreaterOrEqual: true,
			sortResult: 1,
			map: <T1, T2, T3>(mapping: Mapping<T1, T2, T3>) => T1 | T2 | T3,
			valueOf(): 1,
		}, typeof Greater>>(true)
	});

	it('valueOf', () => {
		expect(+Greater).toEqual(1);
	});

	describe('map', () => {
		it('test', () => {
			expect(Greater.map({less: 0, equal: 0, greater: 1}))
				.toEqual(1);
		});

		it('types', () => {
			const result = Greater.map({less: 1, equal: 2, greater: 3} as const);

			assert<IsExact<typeof result, 1 | 2 | 3>>(true);
		});
	});
});

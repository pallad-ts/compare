import {assert, IsExact} from 'conditional-type-checks';
import {Greater} from '@src/Greater';
import {Less} from '@src/Less';

describe('Greater', () => {
	it('valueOf', () => {
		expect(+Greater).toEqual(1);
	});

	it('reversed', () => {
		expect(Greater.reverse).toEqual(Less);
	});

	describe('map', () => {
		describe('as', () => {
			describe('object', () => {
				it('test', () => {
					expect(Greater.map({less: 0, equal: 0, greater: 1}))
						.toEqual(1);
				});

				it('types', () => {
					const result = Greater.map({less: 1, equal: 2, greater: 3} as const);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});

			describe('arguments', () => {
				it('test', () => {
					expect(Greater.map(0, 0, 1))
						.toEqual(1);
				});

				it('types', () => {
					const result = Greater.map(1, 2, 3);

					assert<IsExact<typeof result, 1 | 2 | 3>>(true);
				});
			});
		});
	});
});

import {assert, IsExact} from 'conditional-type-checks';
import {Equal} from '@src/Equal';

describe('Equal', () => {
	it('valueOf', () => {
		expect(+Equal).toEqual(0);
	});

	it('reversed', () => {
		expect(Equal.reverse).toEqual(Equal);
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

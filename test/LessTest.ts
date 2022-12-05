import {assert, IsExact} from 'conditional-type-checks';
import {Less} from '@src/Less';
import {Greater} from '@src/Greater';

describe('Less', () => {
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

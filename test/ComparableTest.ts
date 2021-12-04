import {Comparable} from '@src/Comparable';
import {Less} from '@src/Less';

describe('Comparable', () => {
	describe('is', () => {
		it('success', () => {
			expect(Comparable.is({
				compare(another: any) {
					return Less;
				}
			}))
				.toBe(true);
		});

		it.each<[any]>([
			[{}],
			[[]],
			[{compare: 1}],
			[{compare: 'test'}]
		])('failure: %j', input => {
			expect(Comparable.is(input))
				.toBe(false);
		});
	});
});

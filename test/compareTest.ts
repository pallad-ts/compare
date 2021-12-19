import {compare} from '@src/compare';
import * as sinon from 'sinon';
import {Less} from '@src/Less';
import {Equal} from '@src/Equal';
import {Greater} from '@src/Greater';

describe('compare', () => {
	it('comparing Comparables uses compare method', () => {
		const a = {compare: sinon.stub().returns(Less)};
		const b = {compare: sinon.stub()};

		expect(compare(a, b))
			.toStrictEqual(Less);
	});

	it('comparing non comparables fallbacks to default comparison operators', () => {
		expect(compare(1, 1))
			.toStrictEqual(Equal);

		expect(compare(1, 2))
			.toStrictEqual(Less);

		expect(compare(2, 1))
			.toStrictEqual(Greater);
	});

	it('comparing non comparables fallbacks to default comparison operators', () => {
		expect(compare.reverse(1, 1))
			.toStrictEqual(Equal);

		expect(compare.reverse(1, 2))
			.toStrictEqual(Greater);

		expect(compare.reverse(2, 1))
			.toStrictEqual(Less);
	});
});

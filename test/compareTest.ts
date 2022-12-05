import {compare, createCompareWithComparator} from '@src/compare';
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

	it('comparing non-comparables fallbacks to default comparison operators', () => {
		expect(compare(1, 1))
			.toStrictEqual(Equal);

		expect(compare(1, 2))
			.toStrictEqual(Less);

		expect(compare(2, 1))
			.toStrictEqual(Greater);
	});

	it('comparing non-comparables fallbacks to default comparison operators in reverse', () => {
		expect(compare.reverse(1, 1))
			.toStrictEqual(Equal);

		expect(compare.reverse(1, 2))
			.toStrictEqual(Greater);

		expect(compare.reverse(2, 1))
			.toStrictEqual(Less);
	});

	describe('custom comparator', () => {
		it('uses custom comparator for non-comparables', () => {
			const comparator = sinon.stub().callsFake((a, b) => a - b);

			expect(compare(1, 1, comparator))
				.toStrictEqual(Equal);

			expect(compare(1, 2, comparator))
				.toStrictEqual(Less);

			expect(compare(2, 1, comparator))
				.toStrictEqual(Greater);

			sinon.assert.calledThrice(comparator);
		});

		it('uses custom comparator for comparables', () => {
			const comparator = sinon.stub().callsFake((a, b) => a - b);

			const a = {compare: sinon.stub().returns(Less)};
			const b = {compare: sinon.stub()};

			expect(compare(1, 1, comparator))
				.toStrictEqual(Equal);

			expect(compare(1, 2, comparator))
				.toStrictEqual(Less);

			expect(compare(2, 1, comparator))
				.toStrictEqual(Greater);

			sinon.assert.calledThrice(comparator);
			sinon.assert.notCalled(a.compare);
			sinon.assert.notCalled(b.compare);
		});

		it('allows custom comparator to return Result instances', () => {
			expect(compare(1, 1, () => Equal))
				.toEqual(Equal);
			expect(compare(1, 1, () => Less))
				.toEqual(Less);
			expect(compare(1, 1, () => Greater))
				.toEqual(Greater);
		})
	});

	describe('creating compare with comparator', () => {
		it('always uses custom comparator', () => {
			const comparator = sinon.stub().callsFake((a, b) => a - b);
			const compare = createCompareWithComparator(comparator);

			expect(compare(1, 2))
				.toStrictEqual(Less);

			sinon.assert.calledOnce(comparator);
		});

		it('always uses custom comparator even in reverse order', () => {
			const comparator = sinon.stub().callsFake((a, b) => a - b);
			const compare = createCompareWithComparator(comparator);

			expect(compare.reverse(1, 2))
				.toStrictEqual(Greater);

			sinon.assert.calledOnce(comparator);
		});
	});
});

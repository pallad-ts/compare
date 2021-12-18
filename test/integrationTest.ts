import {compare} from '@src/compare';

describe('integration', () => {
	it.each([
		[5, true],
		[10, false],
		[15, false]
	])('is %s smaller than 10', (value, expected) => {
		expect(compare(value, 10).isLess).toBe(expected);
	})

	it.each([
		[5, true],
		[10, true],
		[15, false]
	])('is %s smaller or equal than 10', (value, expected) => {
		expect(compare(value, 10).isLessOrEqual).toBe(expected);
	});

	it.each([
		[5, false],
		[10, true],
		[15, false]
	])('is %s equal to 10', (value, expected) => {
		expect(compare(value, 10).isEqual).toBe(expected);
	});

	it.each([
		[5, false],
		[10, false],
		[15, true]
	])('is %s greater than 10', (value, expected) => {
		expect(compare(value, 10).isGreater).toBe(expected);
	});

	it.each([
		[5, false],
		[10, true],
		[15, true]
	])('is %s greater or equal 10', (value, expected) => {
		expect(compare(value, 10).isGreaterOrEqual).toBe(expected);
	});
})

import {ComparisonResult} from '@src/ComparisonResult';
import {Less} from '@src/Less';
import {Equal} from '@src/Equal';
import {Greater} from '@src/Greater';

describe('ComparisonResult', () => {
	it('from sort result', () => {
		expect(ComparisonResult.fromSortResult(-Infinity))
			.toEqual(Less);
		expect(ComparisonResult.fromSortResult(-100))
			.toEqual(Less);
		expect(ComparisonResult.fromSortResult(-1))
			.toEqual(Less);
		expect(ComparisonResult.fromSortResult(0))
			.toEqual(Equal);
		expect(ComparisonResult.fromSortResult(1))
			.toEqual(Greater);
		expect(ComparisonResult.fromSortResult(100))
			.toEqual(Greater);
		expect(ComparisonResult.fromSortResult(Infinity))
			.toEqual(Greater);
	})
});

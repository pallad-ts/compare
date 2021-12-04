import {Result} from '@src/Result';
import {Less} from '@src/Less';
import {Equal} from '@src/Equal';
import {Greater} from '@src/Greater';

describe('Result', () => {
	it('from sort result', () => {
		expect(Result.fromSortResult(-Infinity))
			.toEqual(Less);
		expect(Result.fromSortResult(-100))
			.toEqual(Less);
		expect(Result.fromSortResult(-1))
			.toEqual(Less);
		expect(Result.fromSortResult(0))
			.toEqual(Equal);
		expect(Result.fromSortResult(1))
			.toEqual(Greater);
		expect(Result.fromSortResult(100))
			.toEqual(Greater);
		expect(Result.fromSortResult(Infinity))
			.toEqual(Greater);
	})
});

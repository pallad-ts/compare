import {ComparisonResult} from './ComparisonResult';
import {Comparable} from './Comparable';
import {Equal} from './Equal';
import {Less} from './Less';
import {Greater} from './Greater';

export function compare<T = unknown>(a: T, b: T): ComparisonResult {
	if (Comparable.is(a) && Comparable.is(b)) {
		return a.compare(b);
	}

	// eslint-disable-next-line eqeqeq
	if (a == b) {
		return Equal
	} else if ((a as any) < (b as any)) {
		return Less;
	}
	return Greater;
}

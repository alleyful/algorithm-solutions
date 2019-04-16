//Fighting!!
class Calculator {

	power(num, po) {
		if (num < 0 || po < 0) {
			throw 'n and p should be non-negative';
		} else {
			return po < 1 ? 1 : num * this.power(num, po - 1);
		}
	}
}

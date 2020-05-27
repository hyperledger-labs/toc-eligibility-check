'use strict';

class Hashes {

	static check(hash) {
		const hashes = {
			"2615693d1d50f01a247bc486b3609eb3": "",
			"3a096a460c47681f9bd59bc23984a816": "",
			"3ba84c1458fdb6bbf97ffececf988393": ""
		};
		return hashes.hasOwnProperty(hash);
	}

}

if (typeof module != 'undefined' && module.exports) module.exports = Hashes;


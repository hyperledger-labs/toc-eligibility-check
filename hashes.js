'use strict';

class Hashes {
    static check(hash) {
        const hashes = {
        "e193defb51f493f230139742c179c8fa":"",
        };
        return hashes.hasOwnProperty(hash);
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;

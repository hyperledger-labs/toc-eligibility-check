'use strict';

class Hashes {
    static check(hash) {
        const hashes = {
        "314e1e0d0b048f587f4a3d44b15f95c8":"",
        };
        return hashes.hasOwnProperty(hash);
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;

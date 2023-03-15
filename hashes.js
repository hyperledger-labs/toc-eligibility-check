'use strict';

class Hashes {
    static check(hash) {
        const voter_hashes = [
              "1e71edbf25822df394f992c490bf0034"
        ];
        const nominee_hashes = [
             "1e71edbf25822df394f992c490bf0034"
        ];
        return [(voter_hashes.indexOf(hash) != -1), (nominee_hashes.indexOf(hash) != -1)];
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;

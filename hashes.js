'use strict';

class Hashes {
    static check(hash) {
        const voter_hashes = [
              "1e71edbf25822df394f992c490bf0034","a11026215857ed0e732ed097493a7c38","bcebb1e74752ba81c3b3541dcac6548f"
        ];
        const nominee_hashes = [
              "1e71edbf25822df394f992c490bf0034","a11026215857ed0e732ed097493a7c38","aedee66aab0768ef697372bbb2c3bc72"
        ];
        return [(voter_hashes.indexOf(hash) != -1), (nominee_hashes.indexOf(hash) != -1)];
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;

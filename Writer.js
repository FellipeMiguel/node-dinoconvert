const fs = require('fs');
const util = require('util');

class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filiname, data) {
        try {
            await this.writer(filiname, data);
            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = Writer;
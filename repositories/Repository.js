const autoBind = require('auto-bind');
const db = require('./db.js');

class Repository {
    constructor(model) {
        this.model = model;
        autoBind(this);
        db.connect();
    }

    async getAll(query) {
        try {
            return await this.model.find(query);
        } catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
}

module.exports = Repository;

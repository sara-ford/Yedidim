const Repository = require('./Repository.js');
const request = require('../models/requests.models.js');

class RequestRepo extends Repository {
    constructor() {
        super(request);
    }

    async getAll(query) {
        try {
            const result = await this.model.find(query); 
            return result;
        } catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
}

module.exports = new RequestRepo();

const Service = require('./service.js');
const repo = require('../repositories/requestRepo.js');

class RequestService extends Service {
    constructor() {
        super(repo);
    }
    async getAll(query) {
        try {
            const filter = {};
            if (query.PriorityCode) {
                filter.PriorityCode = query.PriorityCode;
            }
            if (query.Status) {
                filter.Status = query.Status;
            }
            return await this.repo.getAll(filter);
        } catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
}

module.exports = new RequestService();

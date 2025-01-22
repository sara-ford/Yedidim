const Repository = require('./Repository.js');
const volunteer = require('../models/Volunteers.model.js');

class volunteerRepo extends Repository {
    constructor() {
        super(volunteer);
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
    async checkIfVolunteerExisits(phone) {
        try {
            const result = await this.model.findOne({ phone });
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error getting volunteer by phone');
        }
    }
}

module.exports = new volunteerRepo();

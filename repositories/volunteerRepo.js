const mongoose = require('mongoose');
const Volunteer = require('../models/Volunteers.model.js');

class VolunteerRepo {
    constructor() {
        this.model = Volunteer;
    }

    async getAll() {
        try {
            const volunteers = await this.model.find({});
            console.log('Fetched volunteers:', volunteers);
            return volunteers;
        } catch (error) {
            console.error('Error fetching volunteers:', error);
            throw error;
        }
    }
}

module.exports = new VolunteerRepo();
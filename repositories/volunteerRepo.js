const Repository = require('./Repository.js');
const Volunteer = require('../models/Volunteers.model.js');

class VolunteerRepo extends Repository {
    constructor() {
        super(Volunteer);
    }
}
module.exports = new VolunteerRepo();

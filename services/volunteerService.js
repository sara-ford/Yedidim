const Service = require('./service.js');
const repo = require('../repositories/volunteerRepo.js');

class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new VolunteerService();

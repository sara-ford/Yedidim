const Controller = require('./controller.js');
const VolunteerService = require('../services/volunteerService.js');

class VolunteerController extends Controller {
    constructor() {
       super(VolunteerService)
    }
}

module.exports = new VolunteerController();

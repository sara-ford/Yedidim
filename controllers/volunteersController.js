const Controller = require('./controller.js');
const volunteerService = require('../services/volunteerService.js');

class VolunteerController extends Controller {
    constructor() {
       super(volunteerService);
    }

    async getAll(req, res, next) {
        try {
            const result = await this.service.getAll(req.query);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new VolunteerController();

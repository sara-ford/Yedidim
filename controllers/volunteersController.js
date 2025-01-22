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
    async checkIfVolunteerExisits(req, res, next) {
        try {
            const phone = req.params.phone;
            const result = await this.service.checkIfVolunteerExisits(phone);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }
    async insertVolunteer(req, res, next) {
        try {
            const data = req.body;

            if (!data.firstName || !data.lastName || !data.phone || !data.specialties) {
                return res.status(400).json({ message: "חסרים נתונים!" });
            }
            const result = await this.service.insertVolunteer(data);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new VolunteerController();

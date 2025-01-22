const Controller = require('./controller.js');
const requestService = require('../services/requestsService.js');

class RequestController extends Controller {
    constructor() {
       super(requestService);
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

module.exports = new RequestController();

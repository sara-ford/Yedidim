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
    async getByPriorityCode(req, res) {
        try {
            const PriorityCode = req.params.priorityCode; // קבלת הקוד מה-URL
            const data = await requestService.getByPriorityCode(PriorityCode); // קריאה לשירות
            res.json(data); // החזרת התשובה ללקוח
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting the list of data');
        }
    }
    
    
    
}

module.exports = new RequestController();

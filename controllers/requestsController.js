const Controller = require('./controller.js');
const requestService = require('../services/requestsService.js');
const mongoose = require('mongoose');

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
            const PriorityCode = req.params.priorityCode; 
            const data = await requestService.getByPriorityCode(PriorityCode); 
            res.json(data); 
        } catch (error) {
            console.log(error);
            res.status(500).send('Error getting the list of data');
        }
    }

    async FindRequest(req, res, next) {
        try {
            const { id, VolunteerCode } = req.body;  // מקבלים את ה-id ו-VolunteerCode מתוך body הבקשה
            const result = await this.service.FindRequest(id, VolunteerCode);  // שים לב כאן
            return res.json(result);
        } catch (e) {
            next(e);  // טיפול בשגיאות
        }
    }
}

module.exports = new RequestController();

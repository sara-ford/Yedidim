const mongoose = require('mongoose');
const Repository = require('./Repository.js');
const request = require('../models/requests.models.js');

class RequestRepo extends Repository {
    constructor() {
        super(request);
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

    async getByPriorityCode(PriorityCode) {
        try {
            const result = await this.model.find({ PriorityCode: Number(PriorityCode) });
            return result;
        } catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }

    async findOne(query) { // שינוי שם השיטה ל-findOne כדי שיהיה תואם למה שנקרא בשירות
        try {
            const result = await this.model.findOne(query);  
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error getting request by id');
        }
    }
}

module.exports = new RequestRepo();

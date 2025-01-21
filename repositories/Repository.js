const autoBind = require('auto-bind');
const db = require('./db.js');

class Repository {

    constructor(model) {
        this.model = model;
        autoBind(this); 
        this.connectToDb(); 
    }

    async connectToDb() {
        try {
            await db.connect(); 
        } catch (error) {
            console.error('Error connecting to DB:', error); 
        }
    }

    async getAll(query) {
        try {
            const data = await this.model.find(query);
            return data;
        } catch (error) {
            console.log('Error fetching data:', error);
            throw new Error('Error getting the list of data');
        }
    }

}

module.exports = Repository;

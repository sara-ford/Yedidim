const autoBind = require('auto-bind');
const db = require('./db.js');

class Repository {

    constructor(model) {
        this.model = model;
        autoBind(this); // חיבור המתודות לאובייקט
        this.connectToDb(); // מחבר את בסיס הנתונים
    }

    // מחבר למסד הנתונים
    async connectToDb() {
        try {
            await db.connect(); // לוודא שהחיבור עובד
        } catch (error) {
            console.error('Error connecting to DB:', error); 
        }
    }

    // פונקציה לשליפת כל הנתונים
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

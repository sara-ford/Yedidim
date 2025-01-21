const autoBind = require('auto-bind');
const db = require('./db'); // יש לוודא שזו הדרך הנכונה לייבא את החיבור למסד נתונים

class Repository {

    constructor(model) {
        this.model = model;
        autoBind(this);
        db.connect(); // להתחבר למסד הנתונים
    }

    async getAll() {
        try {
            return await this.model.find(); // מחזיר את כל הנתונים מהטבלה
        } catch (error) {
            console.log(error);
            throw Error('Error getting the list of data');
        }
    }
}

module.exports = Repository;

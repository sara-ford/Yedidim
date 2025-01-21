const autoBind = require('auto-bind');

class Controller {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const result = await this.service.getAll(); // שליפה של כל הנתונים
            return res.json(result); // מחזיר את הנתונים בפורמט JSON
        } catch (e) {
            next(e); // אם יש שגיאה, שולחים אותה ל-middleware של השגיאות
        }
    }
}

module.exports = Controller;

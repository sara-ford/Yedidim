const Service = require('./service.js');
const repo = require('../repositories/requestRepo.js');

class RequestService extends Service {
    constructor() {
        super(repo);
    }
    async getByPriorityCode(PriorityCode) {
        try {
            const filter = {};

            // המרה למספר אם PriorityCode לא ריק
            if (PriorityCode) {
                const priorityCodeAsNumber = Number(PriorityCode);

                // אם PriorityCode לא ניתן להמיר למספר, נזרוק שגיאה
                if (isNaN(priorityCodeAsNumber)) {
                    throw new Error('Invalid PriorityCode: must be a valid number');
                }

                // הגדרת ה-filter
                filter.PriorityCode = priorityCodeAsNumber;
            }

            // שליחה ל-repository
            return await this.repo.getByPriorityCode(filter);
        } catch (error) {
            console.log(error);
            throw new Error('Error getting the list of data');
        }
    }
}

module.exports = new RequestService();
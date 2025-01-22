const mongoose = require('mongoose');
const Service = require('./service.js');
const repo = require('../repositories/requestRepo.js');

class RequestService extends Service {
    constructor() {
        super(repo);
    }

    async getByPriorityCode(PriorityCode) {
        try {
            const filter = {};
            if (PriorityCode) {
                const priorityCodeAsNumber = Number(PriorityCode);
                if (isNaN(priorityCodeAsNumber)) {
                    throw new Error('Invalid PriorityCode: must be a valid number');
                }
                filter.PriorityCode = priorityCodeAsNumber;
            }
            return await this.repo.getByPriorityCode(filter);
        } catch (error) {
            console.log(error);
            throw new Error('Error getting the list of data');
        }
    }

    async FindRequest(id, VolunteerCode) {
        try {
            const request = await this.repo.findOne({ _id: new mongoose.Types.ObjectId(id) });
            if (request) {
                request.VolunteerCode = VolunteerCode; // שומרים את ה-VolunteerCode כ-String
                request.Status = "in-progress";  // וודא שהמפתח הוא Status ולא status
                await request.save();  
                return { message: ":פרטי הבקשה", request: request.Description }; 
            } else {
                return { message: "הבקשה לא נמצאה" };
            }
        } catch (error) {
            return { message: "אירעה שגיאה בעת חיפוש הבקשה", error: error.message };
        }
    }
}

module.exports = new RequestService();

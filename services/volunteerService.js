const Service = require('./service.js');
const repo = require('../repositories/volunteerRepo.js');
const volunteerRepo = require('../repositories/volunteerRepo.js');
const Volunteer = require('../models/Volunteers.model.js');

class VolunteerService extends Service {
    constructor() {
        super(repo);
    }

    async checkIfVolunteerExisits(phone) {
        try {
            const volunteer = await Volunteer.findOne({ phone });
            if (volunteer) {
                return { message: "יש לך חשבון", volunteerId: volunteer._id.toString() }; 
            } else {
                return { message: "אין לך חשבון במערכת, לך להכניס את פרטיך ב-POST" };
            }
        } catch (error) {
            return { message: "אירעה שגיאה בעת חיפוש המתנדב", error: error.message }; 
        }
    }
    
    

    async insertVolunteer(data) {
        try {
            // יצירת מודל מתנדב חדש
            const volunteer = new Volunteer({
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                specialties: data.specialization
            });

            // שמירה למסד הנתונים
            const savedVolunteer = await volunteer.save();
            return { message: "המתנדב נוסף בהצלחה", volunteer: savedVolunteer };
        } catch (error) {
            return { message: "אירעה שגיאה בעת הוספת המתנדב", error: error.message };
        }
    }
}

module.exports = new VolunteerService();

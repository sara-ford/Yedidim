class Service {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {
        try {
            return await this.repo.getAll(); // שליפה של כל הנתונים ממסד הנתונים
        } catch (error) {
            console.log(error);
            throw Error('Error fetching data');
        }
    }
}

module.exports = Service;

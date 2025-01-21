class Service {
    constructor(repo) {
        this.repo = repo;
    }
    
    async getAll(query) {
        try {
            return await this.repo.getAll(query);
        } catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
}

module.exports = Service;

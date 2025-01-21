const autoBind = require( 'auto-bind' );
const db = require('./db.js');

class Repository {

    constructor(model) {
        this.model = model;
        autoBind( this );
        db.connect();
    }

    async getAll(query) {
        try {
            return await this.model.find(query);
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
    async get(id) {
        try {
            const item = await this.model.findById(id);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            const item = await this.model.create(data);

            if (item) {
                return new HttpResponse(item);
            }
            throw new Error('Something wrong happened');

        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const item = await this.model.findByIdAndUpdate(id, data, { 'new': true });

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            const item = await this.model.findByIdAndDelete(id);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            } else {
                return new HttpResponse(item, { 'deleted': true });
            }
        } catch (errors) {
            throw errors;
        }
    }
}

module.exports = Repository;

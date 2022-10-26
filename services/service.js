class Service {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        try {
            const teams = await this.repository.getAll();
            return teams
        }
        catch (error) {
            return `Error: ${error}`
        }
    }
    async getById(id) {
        try {
            const team = await this.repository.getById(id);
            return team
        }
        catch (error) {
            return `Error: ${error}`
        }
    }
    async create(data) {
        try {
            const team = await this.repository.create(data);
            return team
        }
        catch (error) {
            return `Error: ${error}`
        }
    }
    async update(id, data) {
        try {
            const team = await this.repository.update(id, data);
            return team
        }
        catch (error) {
            return `Error: ${error}`
        }
    }
    async delete(id) {
        try {
            const team = await this.repository.delete(id);
            return team
        }
        catch (error) {
            return `Error: ${error}`
        }
    }
}

module.exports = { Service };
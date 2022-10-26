class Repository {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        const teams = await this.model.find();
        return teams
    }
    async getById(id) {
        const team = await this.model.findById(id);
        return team
    }
    async create(data) {
        const team = await this.model.create(data);
        return team
    }
    async update(id, data) {
        const team = await this.model.findByIdAndUpdate(id, data, { new: true });
        return team
    }
    async delete(id) {
        const team = await this.model.findByIdAndDelete(id);
        return team
    }
}

module.exports = { Repository };
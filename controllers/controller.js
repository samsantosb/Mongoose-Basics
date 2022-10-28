class Controller {
    constructor(service) {
        this.service = service;
    }
    async getAll(req, res) {
        try {
            const teams = await this.service.getAll();
            res.status(200).json(teams);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }

    async getById(req, res) {
        try {
            const team = await this.service.getById(req.params.id);
            res.status(200).json(team);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }

    async create(req, res) {
        try {
            const team = await this.service.create(req.body);
            res.status(201).json(team);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }

    async update(req, res) {
        const body = req.body;
        const id = req.params.id;


        try {
            const team = await this.service.update(body, id);
            res.status(200).json(team);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }

    async delete(req, res) {
        try {
            const team = await this.service.delete(req.params.id);
            res.status(200).json(team);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = { Controller };
const express = require('express');
const { controller } = require('./../factories/factory');

const router = express.Router();

router.get('/teams', controller.getAll.bind(controller));
router.get('/teams/:id', controller.getById.bind(controller));
router.post('/teams', controller.create.bind(controller));
router.put('/teams/:id', controller.update.bind(controller));
router.delete('/teams/:id', controller.delete.bind(controller));

module.exports = { router };
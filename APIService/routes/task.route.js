const controller = require('../controllers/task.controller');
const express = require('express');

const router = express.Router();

router.post('/addNewTask', controller.addNewTask);
router.get('/findTasks', controller.findTasks);

module.exports = router;
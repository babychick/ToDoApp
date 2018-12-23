const task = require('../models/task.model');
const MSG = require('../messages/message');

// add new task
addNewTask = (req, res) => {
    var task = req.body;

    task.create(task)
        .then( data => {
            res.send({
                code: MSG.SUCCESS,
                data: data
            });
        })
        .catch( err => {
            res.send({
                code: MSG.ERROR,
                error: err
            })
        })
}

// find all task

findTasks = (req, res) => {
    task.find()
        .then( data => {
            res.send({
                code: MSG.SUCCESS,
                data: data
            })
        })
        .catch( err => {
            res.send({
                code: MSG.ERROR,
                error: err
            })
        })
}

module.exports = {
    addNewTask,
    findTasks
}
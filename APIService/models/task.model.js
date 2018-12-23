const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const taskSchema = new Schema({

    title: { type: String, required: true},

    deadline: { type: Date, required: true},

    content: { type: String }
})

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'Task');

const task = mongoose.model('Task', taskSchema);

module.exports = task;
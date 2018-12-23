const mongoose = require('mongoose');
const colors = require('colors');

const stringURL = 'mongodb://localhost:27017/ToDoAppDB';

connect = () => {
    mongoose.connect(stringURL, { useCreateIndex: true, useNewUrlParser: true }, err => {
        if (err) {
            console.log('cannot connect to myUserDB'.red);
        } else {
            console.log('connected to myUserDB'.green);
        }
    });
}

module.exports = { connect };
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true});

const Schema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean, default: false}
});

const People = mongoose.model('Task', Schema);
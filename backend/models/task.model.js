const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: {type: String, require: true},
        description: {type: String, require: true},
        status: {type: String, enum: ['TODO','DONE'], default: 'TODO'},
        deadline: {type: Date, require: true },
    },
    {timestamps: true}
);

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;
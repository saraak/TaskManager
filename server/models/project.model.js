// console.log("model.js");
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This project needs a name."],
        minLength: [3, "Name must be at least 3 characters."]
    },
    dueDate: {
        type: Date,
        required: [true, "Each Project needs a due date."],
    },
    creator: {
      type: String,
      required: true
    },
    backlog:{
        type: Boolean,
        default: true,
    },
    inProgress:{
        type: Boolean,
        default: false,
    },
    completed:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


module.exports = mongoose.model('Project', ProjectSchema);
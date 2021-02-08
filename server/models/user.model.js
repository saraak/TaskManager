const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [3, "First name must be at least 3 characters."]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [3, "Last name must be at least 3 characters."]
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email already exists"],
        minlength: [6, "Email must be at least 6 characters."]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters."]
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}



module.exports = mongoose.model('User', UserSchema);
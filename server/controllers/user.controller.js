// console.log("controller.js");
const User = require('../models/user.model')
const bcrypt = require("bcrypt");

module.exports = {
    generateHash: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    create: (req, res) => {
        let newUser = req.body;
        newUser.password = this.generateHash(req.body.password)
        User.create(newUser)
            .then((newUser) => res.json(newUser))
            .catch((err) => res.json({message: "Unable to create new user", error: err}));
    },

    find: (req, res) => {
        User.findOne({email: req.body.email})
            .then((user) => {
                if(user.validPassword(req.body.password)) return user;
                else throw new Error("Invalid");
            })
            .then((findUser) => res.json(findUser))
            .catch((err) => res.json({message: "Account does not exist", error: err}));
    }
}
// console.log("controller.js");
const User = require('../models/user.model')

module.exports = {

    create: (req, res) => {
        User.create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => res.json({message: "Unable to create new user", error: err}));
    }
}
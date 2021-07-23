const User = require('../models/user');
const jwt = require('jsonwebtoken');

const create = async(req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(user);
    } catch(err) {
        res.status(400).json(err);
    }
}

const createJWT = (user) => {
    return jwt.sign (
        {user},
        process.env.SECRET,
        {expiresIn:'24h'}
    );
}

module.exports = {
    create,
}
const { body } = require('express-validator');

module.exports = [
    body('username', 'Your username should be at least 5 characters').isLength({ min: 5 }),
    body('username', 'Your username should consist only english letters and digits!').matches(/^[A-Za-z0-9]+$/),
    body('password', 'Your password should be at least 5 characters').length({ min: 5 }),
    body('password', 'Your password should consist only english letters and digits!').matches(/^[A-Za-z0-9]+$/), 
    body('repeatPassword').custom(passwordCheck)
]

function passwordCheck(repeatPassword, { req }) {
    if(repeatPassword !== req.body.password){
        throw new Error('Passwords does not match!')
    }

    return true
}
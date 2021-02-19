const formValidator = require('./formValidator');
const jwt = require('./jwt')
const authMiddleware = require('./authMiddleware')
const isAuthNeededMIddleware = require('./isAuthNeededMIddleware');
const loginMiddleware = require('./loginMiddleware');
const registerMiddleware = require('./registerMiddleware')

module.exports = {
    formValidator,
    jwt,
    authMiddleware,
    isAuthNeededMIddleware,
    loginMiddleware,
    registerMiddleware
}
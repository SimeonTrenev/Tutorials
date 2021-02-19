const { userController } = require('../controllers');
const { loginMiddleware, registerMiddleware, isAuthNeededMIddleware } = require('../utils')

module.exports = (router) => {
    router.get('/login', isAuthNeededMIddleware(false), userController.get.login);
    router.get('/register', isAuthNeededMIddleware(false), userController.get.register);
    router.get('/logout', isAuthNeededMIddleware(true), userController.get.logout)

    router.post('/register', isAuthNeededMIddleware(false), registerMiddleware, userController.post.register)
    router.post('/login', isAuthNeededMIddleware(false), loginMiddleware, userController.post.login)

    return router;
};
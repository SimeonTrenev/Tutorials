const { homeController } = require('../controllers');
const { isAuthNeededMIddleware } = require('../utils')

module.exports = (router) => {
    router.get('/', isAuthNeededMIddleware(false), homeController.get.home);

    return router
}
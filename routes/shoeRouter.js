const { shoeController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', shoeController.get.all);

    return router
}
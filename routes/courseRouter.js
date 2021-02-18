const { courseController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', courseController.get.all);

    return router
}
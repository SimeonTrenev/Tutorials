const { courseController } = require('../controllers');

module.exports = (router) => {
    router.get('/home', courseController.get.all);

    return router
}
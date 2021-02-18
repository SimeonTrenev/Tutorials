const { courseController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', courseController.get.all);
    router.get('/create', courseController.get.create);


    router.post('/create', courseController.post.create)

    return router
}
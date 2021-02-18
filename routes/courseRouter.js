const { courseController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', courseController.get.all);
    router.get('/create', courseController.get.create);
    router.get('/details/:courseId', courseController.get.details)
    router.get('/edit/:courseId', courseController.get.edit)


    router.post('/create', courseController.post.create)

    return router
}
const { courseController } = require('../controllers');
const { isAuthNeededMIddleware } = require('../utils')

module.exports = (router) => {
    router.get('/all', isAuthNeededMIddleware(), courseController.get.all);
    router.get('/create', isAuthNeededMIddleware(), courseController.get.create);
    router.get('/details/:courseId', isAuthNeededMIddleware(), courseController.get.details)
    router.get('/edit/:courseId', isAuthNeededMIddleware(), courseController.get.edit)
    router.get('/delete/:courseId', isAuthNeededMIddleware(), courseController.get.delete)
    router.get('/enroll/:username/:courseId',  courseController.get.enrol)


    router.post('/create', isAuthNeededMIddleware(), courseController.post.create)
    router.post('/edit/:courseId', isAuthNeededMIddleware(), courseController.post.edit)

    return router
}
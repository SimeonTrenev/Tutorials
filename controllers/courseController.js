const { User } = require('../models');
const { Course } = require('../models')

module.exports = {
    get: {
        all(req, res, next) {
            Course.find({})
            .lean()
            .then(courses => {
            res.render('./home/home.hbs', courses)
            })
            .catch(err => console.log(err))
        },
        create(req, res, next){
            res.render('./course/create.hbs')
        }
    },
    post: {
        create(req, res, next) {
            if(req.body.isPublic === 'on'){
                req.body.isPublic = true
            }else{
                req.body.isPublic = false
            }
            Course.create({ ...req.body, createdAt: Date.now() })
            .then(createdCourse => {
                res.redirect('/course/all')
            })
            .catch(err => {
                console.log(err)
                res.redirect('/course/create')
            })
        }
    }
}
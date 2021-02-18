const { User, Shoe } = require('../models');

module.exports = {
    get: {
        login(req, res, next){
            res.render('./home/home.hbs', {
                name: 'login'
            })
        },
        register(req, res, next) {
            res.render('./home/home.hbs', {
                name: 'register'
            })
        }
    },
    post:{}
};
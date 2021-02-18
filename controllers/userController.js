const { User } = require('../models');
const { cookie } = require('../config')

module.exports = {
    get: {
        login(req, res, next){
            res.render('./user/login.hbs')
        },
        register(req, res, next) {
            res.render('./user/register.hbs')
        },
        logout(req, res, next) {
            res
            .clearCookie(cookie)
            .redirect('/home')
        },
        profile(req, res, next){
            res.render('')
        }
    },
    post:{
        register(req, res, next){
            
        },
        login(req, res, next){

        }
    }
};
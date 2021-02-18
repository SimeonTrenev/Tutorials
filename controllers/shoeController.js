module.exports = {
    get: {
        all(req, res, next) {
            res.render('./shoes/shoes.hbs')
        }
    }
}
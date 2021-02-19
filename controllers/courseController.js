const { User } = require("../models");
const { Course } = require("../models");

module.exports = {
  get: {
    all(req, res, next) {
      Course.find({})
        .lean()
        .then((courses) => {
          res.render("./home/home.hbs", {
            courses,
          });
        })
        .catch((err) => console.log(err));
    },
    create(req, res, next) {
      res.render("./course/create.hbs");
    },
    details(req, res, next) {
      Course.findOne({ _id: req.params.courseId })
        .lean()
        .then((courses) => {
          res.render("./course/details.hbs", { ...courses });
        })
        .catch((err) => console.log(err));
    },
    edit(req, res, next) {
      Course.findOne({ _id: req.params.courseId })
        .lean()
        .then((courses) => {
          res.render("./course/edit.hbs", courses);
        })
        .catch((err) => console.log(err));
    },
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.courseId })
        .then(courses => {
            res.redirect('/course/all')
        })
        .catch(err => console.log(err))
    },
    enrol(req, res, next) {
        const { username, courseId } = req.params;
        User
            .findOne({ username })
            .then(currentUser => {
                currentUser.enrolledCourses.push(courseId)
                currentUser.save()
               
            })
            .catch(err => console.log(err))

        Course
            .findOne({ courseId })
            .then(currentCourse => {
                console.log(currentCourse)
                currentCourse.usersEnrolled.push(username)
                currentCourse.save()
                res.redirect(`/course/details/${courseId}`)
            })
            .catch(err => console.log(err))
    },
  },
  post: {
    create(req, res, next) {
      if (req.body.isPublic !== undefined) {
        req.body.isPublic = true;
      } else {
        req.body.isPublic = false;
      }
      Course.create({ ...req.body, createdAt: Date.now() })
        .then((createdCourse) => {
          res.redirect("/course/all");
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/course/create");
        });
    },
    edit(req, res, next){
        const { courseId } = req.params;

        Course.updateOne({ _id: courseId }, { $set: { ...req.body } })
            .then(updatedCourse => {
                if(updatedCourse.isPublic = false){
                    
                }else{
                    updatedCourse.isPublic.checked = true
                }
                res.redirect(`/course/details/${courseId}`)
            })
            .catch(err => console.log(err))
    }
  },
};

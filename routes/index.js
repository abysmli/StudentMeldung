var express = require('express');
var router = express.Router();
var Student = require('../models/student.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: '新生注册',
        layout: 'layout'
    });
});

router.get('/dashuangliyuan', function (req, res) {
    Student.find({}, null, {}, function (err, students) {
        if (err)
            res.render('error');
        else
            res.render('check', {
                title: '报名情况',
                students: students,
                layout: 'layout'
            });
    });
});

router.post('/', function (req, res) {
    Student.create(req.body, function (err, student) {
        if (err) {
            console.log(err);
            return err;
        }
        return res.render('success', {
            title: '报名成功',
            layout: 'layout'
        });
    });
});

module.exports = router;

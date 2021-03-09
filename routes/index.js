var JSalert = require('js-alert');
var express = require('express');
var mysql = require('mysql');
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      var sess = req.session;
      res.render('index', {
          sess : sess
      });
});

router.get('/index', function(req, res, next) {
    var sess = req.session;
    res.render('index', {
        sess : sess
    });
});

router.get('/loginf', function(req, res, next) {
    var sess = req.session;
    res.render('loginf', {
        sess : sess
    });
});

router.get('/index2', function(req, res, next) {
    var sess = req.session;
    res.render('index2', {
        sess : sess
    });
});

router.get('/login', function(req, res, next) {
    res.render('member/login');
})

router.get('/logout', function(req, res, next) {
    req.session.destroy(function (err) {
        if(err) return next(err);
        res.redirect('/');
    })
})

router.post('/login', function(req, res, next) {
    // req.session = {};
    var sess = req.session;
    var moment = require('moment');
    require('moment-timezone');
    moment.tz.setDefault("Asia/Seoul");
    var date = moment().format('YYYY-MM-DD');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    var email = req.body.email;
    var password = req.body.password;

    var hmac = crypto.createHmac('sha256', password);
    var pass = hmac.update(password).digest('hex');

    connection.connect(function (err) {
        if (err) throw err;
        var sql = "select * from member where email=? AND password=?";
        connection.query(sql, [email, pass], function (err, result) {
            if (err) throw err;
            if(result == '') {
                res.redirect('/loginf');
            } else {
                sess.logged_in = true;
                sess.id_num = result[0].id_num;
                sess.email = result[0].email;
                sess.name = result[0].name;
                sess.password = result[0].password;
                sess.date = result[0].member;
                connection.query("update member set member='"+date+"' where id_num="+sess.id_num);
                res.redirect('/');
            }
        })
    })
})

router.get('/register', function(req, res, next) {
    res.render('member/register');
})

router.post('/register', function(req, res, next) {
    var mysql = require('mysql');
    var moment = require('moment');
    require('moment-timezone');
    moment.tz.setDefault("Asia/Seoul");
    var date = moment().format('YYYY-MM-DD');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;

    var hmac = crypto.createHmac('sha256', password);
    var pass = hmac.update(password).digest('hex');

    var query = connection.query("insert into member (email, name, password, member) values ('" + email + "', '" + name + "', '" + pass + "', '" + date + "')",
        function(err, rows) {
        if(err) throw err;
        console.log('Member Data inserted!');
    })

    res.redirect('/login');
})

router.get('/problem_register', function(req, res, next) {
    var sess = req.session;


    if(sess.logged_in == true) {

    } else {
        res.redirect('/index2');
    }

    res.render('problem/problem_register',
        {
            sess: sess
        });
});

router.post('/problem_register', function(req, res, next) {
    var sess = req.session;
    var mysql = require('mysql');

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    var title = req.body.title;
    var sub_title = req.body.sub_title;
    var sentence = req.body.sentence;
    var words = req.body.words;

    exports.book_query = connection.query("1 into book (title, sub_title, date, user_id, sentence, name) values ('" + title + "', '" + sub_title + "', '" + today + "', '" + sess.id_num + "', '" + sentence + "', '" + sess.name +"')", function(err, rows) {
        if(err) throw err;
        console.log('Book Data inserted!');
    })


    var sql = "select * from book where title=? AND sub_title=? AND sentence=?";            // 정확히 값 가져오는 기능 다시구현해야됨
    connection.query(sql, [title, sub_title, sentence], function (err, result) {
        if (err) throw err;
        if(result == '') {
        } else {
            book_num = result[0].id_num;
            for(var i = 0; i < words.length; i++) {
                var words_query = connection.query("insert into words (book_num, words) values ('" + book_num + "', '" + words[i] + "')", function (err, rows) {
                    if (err) throw err;
                    console.log('Word Data inserted!');
                })
            }
        }
        })
    res.redirect('/');
});

router.get('/problem_list', function(req, res, next) {
    var sess = req.session;
    var search = req.query.search;
    var name = sess.name;
    var mysql = require('mysql');
    var result;

    if(sess.logged_in == true) {
    } else {
        res.redirect('/index2');
    }

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    if(search == undefined) {
        var sql = "select * from book where name='"+name+"';";
    } else {
        var sql = "select * from book where title like '"+search+"%' OR sub_title like '"+search+"%' AND name='"+name+"';";
    }
    var sql2 = "select * from words;";
    connection.query(sql, function(err, result2) {
        if(err) throw err;

        connection.query(sql2, function(err, result3) {
            res.render('problem/problem_list', {
                sess : sess,
                result: result2,
                result2: result3
            });
        });
    });
});

router.get('/problem', function(req, res, next) {
    var sess = req.session;
    var mysql = require('mysql');
    var book_num = req.query.book_num;
    var result;

    if(sess.logged_in == true) {

    } else {
        res.redirect('/index2');
    }

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    var sql = "select * from book where id_num=?";
    connection.query(sql, [book_num], function(err, result2) {
        if(err) throw err;

        var sql2 = "select * from words where book_num=?";
        connection.query(sql2, [book_num], function(err, result3) {
            res.render('problem/problem', {
                sess : sess,
                result: result2,
                result2: result3
            });
        })
    })
});

router.get('/problem_search', function(req, res, next) {
    var sess = req.session;
    var search = req.query.search;
    var name = sess.name;
    var mysql = require('mysql');
    var result;

    if(sess.logged_in == true) {
    } else {
        res.redirect('/index2');
    }

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'anskadlqslek',
        database: 'seniz'
    });

    if(search == undefined) {
        var sql = "select * from book;";
    } else {
        var sql = "select * from book where title like '"+search+"%' OR sub_title like '"+search+"%';";
    }
    var sql2 = "select * from words;";
    connection.query(sql, function(err, result2) {
        if(err) throw err;

        connection.query(sql2, function(err, result3) {
            res.render('problem/search_list', {
                sess : sess,
                result: result2,
                result2: result3
            });
        });
    });
})

module.exports = router;

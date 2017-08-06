var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongodbConfig = require('./mongodbConfig');
var apiRouter = require('./api/index');
var app = express();
var accessControl = require('./middleware/accessControl.js').accessControl;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ //session持久化配置
    secret: "july",
    key: "libo",
    cookie: { maxAge: 1000 * 100 * 60 }, //超时时间
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({    //使用数据库存储session
        url: mongodbConfig.url
    })
}));

var routerPage = {
    admin: require('./routes/admin/index'),   //后台界面
    index: require('./routes/index'),
    article: require('./routes/article')
}
app.use('/',accessControl);
app.use('/', routerPage.index);
app.use('/', routerPage.article);
app.use('/admin', routerPage.admin);

app.use('/',apiRouter);
app.use((req, res, next) => {         // catch 404 and forward to error handler
    res.render('error', {
        user: req.session.user,
        error: {
            message: 'Not Found'
        }
    });
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
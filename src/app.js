var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

router.get('/', function (req, res, next) {
    res.end('Hello World!')
});

app.use('/', router);

app.listen(3000, function () {
    console.log('server listening at port 3000...');
});
"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import  from "express-router";
var app = (0, _express2.default)();
var router = (0, _express.Router)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());

router.get('/', function (req, res, next) {
    res.end('Hello World!');
});

app.use('/', router);

app.listen(3000, function () {
    console.log('server listening at port 3000...');
});
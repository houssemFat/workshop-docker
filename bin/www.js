/**
 *
 * --------------------
 * --- DESCRIPTION ----
 * --------------------
 * @copyright  ,  proxym-it , {}
 * Created by houssem.fathallah on 19/12/2016.
 * Updated by houssem.fathallah on 19/12/2016.
 */
var express = require('express');
var path = require('path');
var app = express();
var pathToSrc = path.join(__dirname, '..', 'src');
// use public files
app.use(express.static(pathToSrc));
app.set('views', path.join(pathToSrc, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Listen to port 3000
app.listen(3000, function () {
    console.log('Running in port 3000')
});

//
app.get('/', function (req, res) {
    res.render('index.ejs', { title: 'Hey', message: 'Hello there!', processID : process.pid });
    //res.sendFile(pathToSrc + "/");
});
// others
app.use(function (req, res) {
    res.render("oops.html");
});

process.on('uncaughtException', function (err) {
    console.log("uncaughtException");
    console.error(err.stack);
});
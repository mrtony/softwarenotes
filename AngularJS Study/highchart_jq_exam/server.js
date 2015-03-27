var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));

var cors = require('cors');
app.use(cors());

app.listen(8000);

console.log('Express listening on port 8000');
var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/customers', function(req, res) {
    //res.json(customers);
    res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
        {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
        {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
    ];
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/views'));


app.set('view engine', 'html');

app.get('/admin', function(req, res) {
    res.sendfile('views/pages/admin.html')
  });

app.get('/counter', function(req, res){
    res.sendfile('views/pages/counter.html')
});



app.listen(8080, function() {
    console.log('Listen port 8080')
})


var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'html');

app.get('/admin', function(req, res) {
    res.sendfile('./admin.html')
  });
  
app.get('/login', function(req, res) {
    res.sendfile('./login.html')
  });

app.get('/counter', function(req, res){
    res.sendfile('./counter.html')
});

//app.get('/base.js', function(req, res){
//    res.sendfile('models/base.js')
//});

app.listen(8080, function() {
    console.log('Listen port 8080')
})


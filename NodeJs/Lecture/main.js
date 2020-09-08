var http = require('http');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; //쿼리 데이터 얻는 방법
    console.log(queryData.id);//주소상 ?id=...에 해당함
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);
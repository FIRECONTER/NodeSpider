
/**
  *
*/
var http = require('http');
var options={
  hostname:'www.baidu.com',
  port:80,
  method:'GET'
}
var req = http.request(options,(res)=>{
  var str='';
  res.on('data',(chunk)=>{
    str+=chunk;
  });
  res.on('end',()=>{
    //console.log(str);
  })

});

console.log(req.__proto__);//what is the type clientrequest
//req.end();// the end of the request

let http = require('http');
let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () =>{
  console.log(`Server running at port ${port}`);
})


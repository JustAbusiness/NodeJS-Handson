const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request .... ');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3> Hello World </h3>');
    res.write('<h2> FROM Ngoc Huy with love >3 </h2>');
    res.end();
});

server.listen(3100, 'localhost', () => {
    console.log("NodeJS listening on port 3100");

});
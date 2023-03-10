const http = require('http');
const cron = require('node-cron');

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);

  let task = cron.schedule('* * * * * * ', ()=> {
    console.log('Task submitted successfully');
  });

  setTimeout(()=> {
    task.start();
  }, 500)
});
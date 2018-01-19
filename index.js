const http = require('http');
const port = '1337';
const app = new http.Server();

app.on('request', (req, res) => {
  const { DEV, PROD } = process.env;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`dev.yml: ${DEV}\nprod.yml: ${PROD}`);
  res.end('\n');
});

app.listen(port, () => {
  const { DEV, PROD } = process.env;
  console.log(`dev.yml: ${DEV}\nprod.yml: ${PROD}`);
});

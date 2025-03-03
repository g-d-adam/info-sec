const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(helmet({
  strictTransportSecurity: false,
}));















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Useful programmer info security app started on port ${port}`);
});
module.exports = app;
helmet.hidePoweredBy();
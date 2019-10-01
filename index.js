
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

const arguments = process.argv.slice(2);
app.use(history());
app.use(express.static(arguments[0]));
const port = arguments[1];
app.listen(port, () => console.log('serve-spa is listening on ' + port));

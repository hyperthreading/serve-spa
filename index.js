
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const history = require('connect-history-api-fallback');

app.use('/', history(), express.static('../sol-community-dashboard/dist'));

app.listen(3000);

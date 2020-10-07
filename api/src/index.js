const express = require('express');

const app = express();

const routes = require('./routes');

require('./app/database');

app.use(routes)

app.listen(3333);

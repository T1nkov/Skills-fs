const express = require('express');
const bodyParser = require('body-parser');
const { route } = require('./controller/skill.controller');

const app = express();

app.use(bodyParser.json());

app.use('/skills', route);

app.use((error, _req, res, _next) => res.send(error.message));

module.exports = { app };

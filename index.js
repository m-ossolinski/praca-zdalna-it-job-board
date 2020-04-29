const express = require('express');

const defaultRoutes = require('./routes/defaultRoutes');

const app = express();

defaultRoutes(app);

const PORT = 5000;
app.listen(PORT);
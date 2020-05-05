const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authenticationRoutes');
const { mongoURI } = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
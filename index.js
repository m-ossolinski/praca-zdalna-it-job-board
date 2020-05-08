const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authenticationRoutes');
const offerRoutes = require('./routes/offerRoutes');
const { mongoURI, cookieKey } = require('./config/keys');
require('./models/Offer');
require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
offerRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
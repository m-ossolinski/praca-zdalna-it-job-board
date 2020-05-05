const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20');
const { googleClientID, googleClientSecret } = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true,
}, (accessToken, refreshToken, profile, done) => {
  new User({ googleId: profile.id }).save();
}));
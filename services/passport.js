const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20');
const { googleClientID, googleClientSecret } = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
})

passport.use(new GoogleStrategy({
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true,
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then(existingUser => {
      console.log(existingUser);
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
      }
    })
    .catch(err => console.log(err));
}));
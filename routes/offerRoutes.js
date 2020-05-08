const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Offer = mongoose.model('offers');

module.exports = app => {
  app.post('/api/offers', requireLogin, (req, res) => {
    const { title, company, description, requirements } = req.body;

    const offer = new Offer({
      title,
      company,
      description,
      requirements,
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
}
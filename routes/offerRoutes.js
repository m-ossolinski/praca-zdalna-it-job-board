const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Offer = mongoose.model('offers');

module.exports = app => {
  app.post('/api/offer', requireLogin, async (req, res) => {
    const { title, company, description, requirements } = req.body;

    const offer = new Offer({
      title,
      company,
      description,
      requirements,
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await offer.save()
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/offer', async (req, res) => {
    let offers;
    console.log(req.query);
    if (req.query.userOffers) {
      offers = await Offer.find({ _user: req.user.id }).select();
    } else {
      offers = await Offer.find({});
    }

    res.send(offers);
  })
}
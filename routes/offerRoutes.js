const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

// const Offer = mongoose.model('offer');

module.exports = app => {
  app.post('/api/offer', requireLogin, async (req, res) => {
    console.log(req.body, '#######');
    const { title, company, description, requirements } = req.body;
    //
    // const offer = new Offer({
    //   title,
    //   company,
    //   description,
    //   requirements,
    //   _user: req.user.id,
    //   dateSent: Date.now()
    // });
    //
    // try {
    //   await offer.save()
    // } catch (err) {
    //   res.status(422).send(err);
    // }
  });
}
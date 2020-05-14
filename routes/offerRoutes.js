const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Offer = mongoose.model("offers");

module.exports = (app) => {
  app.post("/api/offer", requireLogin, async (req, res) => {
    const {
      title,
      company,
      description,
      requirements,
      companyDescription,
      jobLocalization,
    } = req.body;

    const offer = new Offer({
      title,
      company,
      description,
      requirements,
      companyDescription,
      jobLocalization,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    try {
      await offer.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/offer", async (req, res) => {
    let offers;

    if (req.query.userOffers) {
      offers = await Offer.find({ _user: req.user.id }).select();
    } else {
      offers = await Offer.find({});
    }

    res.send(offers);
  });

  app.delete("/api/offer", async (req, res) => {
    try {
      const response = await Offer.deleteOne({ _id: req.query.offerId });
      res.send(response).status(200);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/offer/:offerId", async (req, res) => {
    try {
      const response = await Offer.findById({ _id: req.params.offerId });
      res.send(response).status(200);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

const mongoose = require("mongoose");
const { Schema } = mongoose;

const offerSchema = new Schema({
  title: String,
  company: String,
  description: String,
  requirements: String,
  companyDescription: String,
  jobLocalization: String,
  phone: Number,
  email: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dataSent: Date,
});

mongoose.model("offers", offerSchema);

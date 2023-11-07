const mongoose = require("mongoose");
const { Schema } = mongoose; // ObjectId is a special data type we have to import

const portfolioSchema = new mongoose.Schema({
    coins: [{type: Schema.Types.ObjectId, ref: "Currency"}]
  });

const Portfolio = mongoose.model('portfolio', portfolioSchema)
module.exports= Portfolio;


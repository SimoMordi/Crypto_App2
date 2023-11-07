const mongoose = require("mongoose");
const { Schema } = mongoose; // ObjectId is a special data type we have to import

const coinSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    orderType: {
      type: String,
      required: true,
      enum: ['buy', 'sell'] 
    }
  });

const Coin = mongoose.model('Coin', coinSchema)
module.exports= Coin;


const mongoose = require('mongoose');

// Define the schema for the currency
const currencySchema = new mongoose.Schema({
  name: { type: String, required: true
  },
  symbol: {type: String, required: true
  },
  price: { type: Number, required: true
  },
  amount: { type: Number, required: true
  },
  // orderType: { type: String, required: true, enum: ['buy', 'sell'] 
  // }
});

// Create a model using the schema
const Crypto = mongoose.model('Currency', currencySchema);

module.exports = Crypto;

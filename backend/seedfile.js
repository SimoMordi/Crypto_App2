const Crypto = require('./models/Currencies.js');


// establish connection to MONGO
require('./config/db.js')
// instert all these objects into the "states" collection
const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: 47000.23, orderType: "buy" },
    { name: "Ethereum", symbol: "ETH", price: 3200.55, orderType: "sell" },
    { name: "Ripple", symbol: "XRP", price: 0.75, orderType: "buy" },
    { name: "Litecoin", symbol: "LTC", price: 150.00, orderType: "sell" },
    { name: "Cardano", symbol: "ADA", price: 1.25, orderType: "buy" },
    { name: "Zcash", symbol: "ZEC", price: 140.00, orderType: "sell" },
    { name: "Dash", symbol: "DASH", price: 180.00, orderType: "buy" },
    { name: "Monero", symbol: "XMR", price: 220.00, orderType: "sell" },
    { name: "EOS", symbol: "EOS", price: 3.50, orderType: "buy" },
    { name: "NEO", symbol: "NEO", price: 25.00, orderType: "sell" },
    { name: "IOTA", symbol: "MIOTA", price: 0.35, orderType: "buy" },
    { name: "NEM", symbol: "XEM", price: 0.15, orderType: "sell" },
    { name: "VeChain", symbol: "VET", price: 0.08, orderType: "buy" },
    { name: "TRON", symbol: "TRX", price: 0.07, orderType: "sell" },
    { name: "Tezos", symbol: "XTZ", price: 4.00, orderType: "buy" },
    { name: "Stellar", symbol: "XLM", price: 0.30, orderType: "sell" },
    { name: "Chainlink", symbol: "LINK", price: 25.00, orderType: "buy" },
    { name: "Polkadot", symbol: "DOT", price: 20.00, orderType: "sell" },
    { name: "Uniswap", symbol: "UNI", price: 15.00, orderType: "buy" },
    { name: "Aave", symbol: "AAVE", price: 150.00, orderType: "sell" },
    { name: "Binance Coin", symbol: "BNB", price: 400.00, orderType: "buy" },
    { name: "Solana", symbol: "SOL", price: 100.00, orderType: "sell" },
    { name: "Avalanche", symbol: "AVAX", price: 50.00, orderType: "buy" },
    { name: "Algorand", symbol: "ALGO", price: 1.00, orderType: "sell" },
    { name: "Filecoin", symbol: "FIL", price: 20.00, orderType: "buy" },
    { name: "Cosmos", symbol: "ATOM", price: 10.00, orderType: "sell" },
    { name: "Polygon", symbol: "MATIC", price: 1.50, orderType: "buy" },
    { name: "Maker", symbol: "MKR", price: 1500.00, orderType: "sell" },
    { name: "SushiSwap", symbol: "SUSHI", price: 5.00, orderType: "buy" },
    { name: "Compound", symbol: "COMP", price: 200.00, orderType: "sell" },
    { name: "Yearn.finance", symbol: "YFI", price: 20000.00, orderType: "buy" },
    { name: "Decentraland", symbol: "MANA", price: 3.00, orderType: "sell" },
    { name: "The Sandbox", symbol: "SAND", price: 4.00, orderType: "buy" },
    { name: "Axie Infinity", symbol: "AXS", price: 60.00, orderType: "sell" },
    { name: "Enjin Coin", symbol: "ENJ", price: 2.00, orderType: "buy" },
    { name: "Chiliz", symbol: "CHZ", price: 0.50, orderType: "sell" },
    { name: "Flow", symbol: "FLOW", price: 10.00, orderType: "buy" },
    { name: "Quant", symbol: "QNT", price: 150.00, orderType: "sell" },
    { name: "Kusama", symbol: "KSM", price: 200.00, orderType: "buy" },
    { name: "Hedera", symbol: "HBAR", price: 0.20, orderType: "sell" },
    { name: "Stacks", symbol: "STX", price: 1.00, orderType: "buy" },
    { name: "Gnosis", symbol: "GNO", price: 200.00, orderType: "sell" },
    { name: "Siacoin", symbol: "SC", price: 0.01, orderType: "buy" },
    { name: "Basic Attention Token", symbol: "BAT", price: 1.00, orderType: "sell" },
    { name: "0x", symbol: "ZRX", price: 0.50, orderType: "buy" },
  ];
  

const insert = async () => {
    // dont want to enter all the states twice 
    await Crypto.deleteMany()
    await Crypto.insertMany(cryptocurrencies);
} 
insert()



import { useState } from 'react';


const PortfolioPage = () => {
  const { currencies, setCurrencies } = useCrypto()
  
  // You'll need state to handle the input from the form
  const [currencyName, setCurrencyName] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [currencyAmount, setCurrencyAmount] = useState('');
  const [currencyPrice, setCurrencyPrice] = useState('');

  // Function to handle adding a currency
  const handleAddCurrency = () => {
    const newCurrency = {
      id: Date.now(), // temporary unique id
      name: currencyName,
      symbol: currencySymbol,
      amount: Number(currencyAmount),
      price: Number(currencyPrice)
    };
    setData(prevData => [...prevData, newCurrency]);
    // Reset the form fields
    setCurrencyName('');
    setCurrencySymbol('');
    setCurrencyAmount('');
    setCurrencyPrice('');
  };

  // Function to handle removing a currency
  const handleRemoveCurrency = (currencyId) => {
    setCurrencies(prevData => prevData.filter(currency => currency.id !== currencyId));
  };

  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <div className="currencies">
        {currencies.map((currency) => (
          <div key={currency.id} className="currency">
            <h2>{currency.name} - {currency.symbol}</h2>
            <p>Amount: {currency.amount}</p>
            <p>Price: ${currency.price.toFixed(2)}</p>
            <button onClick={() => handleRemoveCurrency(currency.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Add a New Currency</h2>
        <input
          type="text"
          value={currencyName}
          onChange={(e) => setCurrencyName(e.target.value)}
          placeholder="Currency Name"
        />
        <input
          type="text"
          value={currencySymbol}
          onChange={(e) => setCurrencySymbol(e.target.value)}
          placeholder="Currency Symbol"
        />
        <input
          type="number"
          value={currencyAmount}
          onChange={(e) => setCurrencyAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="number"
          value={currencyPrice}
          onChange={(e) => setCurrencyPrice(e.target.value)}
          placeholder="Price"
        />
        <button onClick={handleAddCurrency}>Add Currency</button>
      </div>
    </div>
  );
};

export default PortfolioPage;
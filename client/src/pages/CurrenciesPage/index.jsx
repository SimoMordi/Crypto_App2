import { useState } from 'react';
import axios from 'axios';
import "./index.css"

const  CurrenciesPage = () => {
  // Combined state 
  const [currency, setCurrency] = useState({
    name: '',
    symbol: '',
    amount: '',
    price: ''
  });
  // Added state for the list of currencies
  const [currencyList, setCurrencyList] = useState([]);

  // Function to handle adding a currency
  const handleAddCurrency = () => {
    const newCurrency = {
      // id: Date.now(), // temporary unique id
      name: currency.name,
      symbol: currency.symbol,
      amount: Number(currency.amount),
      price: Number(currency.price)
    };

    axios({
      method: "post",
      url: "/server/coins",
      data: newCurrency
    }).then((response) => {
      console.log(response);
    });

    setCurrencyList(prevData => [...prevData, newCurrency]);
    // Reset the form fields using the new setCurrency function
    setCurrency({
      name: '',
      symbol: '',
      amount: '',
      price: ''
    });
  };

  // Function to handle removing a currency
  const handleRemoveCurrency = (currencyId) => {
    setCurrencyList(prevData => prevData.filter(currency => currency.id !== currencyId));
  };

  const handleDelete = (id) => {
    try {
      axios({
        method: "delete",
        url: `server/coins/${id}`,
      }).then(() => {
        setCurrencyList(prevData => prevData.filter((coin) => coin._id !== id));
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Function to update currency state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrency((prevCurrency) => ({
      ...prevCurrency,
      [name]: value
    }));
  };

  return (
    <div className="currencies-page">
      
      <div className="currency-form">
        <h2>Add a New Currency</h2>
        <input
          type="text"
          name="name"
          value={currency.name}
          onChange={handleChange}
          placeholder="Currency Name"
        />
        <input
          type="text"
          name="symbol"
          value={currency.symbol}
          onChange={handleChange}
          placeholder="Currency Symbol"
        />
        <input
          type="number"
          name="amount"
          value={currency.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          type="number"
          name="price"
          value={currency.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button className="mybutton" onClick={handleAddCurrency}>Add Currency</button>
      </div>
    </div>
  );
};

export default CurrenciesPage;

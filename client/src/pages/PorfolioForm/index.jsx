import { useState } from 'react'; // useContext is added
import axios from 'axios';
import { useCrypto } from '../../context/cryptoContext';


const PortfolioForm = () => {
  // Use the context to access the necessary state and functions
  const { currencies, coins, setCoins } = useCrypto(); // useContext is used

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    amount:'',
    symbol: '',
    orderType: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);

      try {
          let response = await axios({
              method: "POST",
              url: "/server/coins",
              data: formData // found in req.body
          })
          console.log(response);
          setCoins([...coins, response.data]);
          // Reset form data after successful submission
          setFormData({
              name: '',
              price: '',
              amount:'',
              symbol: '',
              orderType: ''
          });
          // Provide success feedback 
          alert('Currency added to portfolio!');
      } catch (error) {
          // Provide error feedback 
          alert('Failed to add currency. Please try again.');
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="currency">Currency:</label>
              <select
                  id="currency"
                  name="currency" // This should be unique to the select and match the expected data structure
                  value={formData.currency || ''} // Use formData.currency for controlled component
                  onChange={handleChange}
              >
                  <option value="" disabled>Select a Currency</option>
                  {currencies.map(currency => (
                      <option key={currency._id} value={currency.name}>
                          {currency.name}
                      </option>
                  ))}
              </select>
          </div>
       
          <button type="submit">Add to PortfolioList</button>
      </form>
  );
}

export default PortfolioForm;

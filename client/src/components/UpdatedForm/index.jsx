import axios from 'axios';
import { useCrypto } from '../../context/cryptoContext';



const UpdatedForm = () => {


    const { coinToEdit, setCoinToEdit, currencies, setCurrencies, coins, setCoins } = useCrypto();
    
console.log(coinToEdit);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoinToEdit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let response = await axios({
            method: "PUT",
            url: `/server/coins/${coinToEdit._id}`,
            data: coinToEdit // found in req.body
        })
        console.log(response);

        let newCoins = currencies.map((coin) => {
            if (coin._id == coinToEdit._id) {
                return response.data
            } else {
                return coin
            }
          })
          setCurrencies(newCoins);
          setCoinToEdit(null)

        // update fronted state as well!
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="currencies">Currency:</label>
        <select
            id="name"
            name="name"
            value={coinToEdit._id}
            onChange={handleChange}
        >
            <option value="" disabled>Select a currency</option>
            {currencies.map(currency => (
                <option key={currency._id} value={currency._id}>
                    {currency.name}
                </option>
            ))}
        </select>
    </div>
    <div>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={coinToEdit.name}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="price">Price:</label>
        <input
            type="number"
            id="price"
            name="price"
            value={coinToEdit.price}
            onChange={handleChange}
        />
    </div>

    <button className='mybutton' type="submit">Submit updates</button>
</form>
  )
}

export default UpdatedForm
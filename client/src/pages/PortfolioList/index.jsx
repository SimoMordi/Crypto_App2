import axios from 'axios';
import UpdatedForm from '../../components/UpdatedForm';
import { useCrypto } from '../../context/cryptoContext';
import './index.css'

const PortfolioList = () => {


  const { currencies, setCurrencies, coinToEdit, setCoinToEdit } = useCrypto();

  const handleDelete = (id) => {
    try{
      axios({
        method: "DELETE",
        url: `/server/coins/${id}`
      }).then(() => {
        // just like when we create on the DB, and add it to frontend state
        // when we delete from DB, we need to remove from frontend state
        let newCoins = currencies.filter((coin) => {
          return coin._id !== id;
        })
       
        setCurrencies(newCoins);
      })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="portfolio-list" >

     {coinToEdit &&  <UpdatedForm />}

      {currencies.map((coin) => {
        return <div key={coin._id}  className="coin-card">
          <h3 className="coin-name" >{coin.name}</h3>
          <button  className="mybutton" onClick={() => handleDelete(coin._id)}>DELETE</button>
          <button   className="mybutton"onClick={() => setCoinToEdit(coin)}>Edit</button>
          <div className="coin-info">
            <p>Symbol: {coin.symbol}</p>
            <p>Price: {coin.price}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default PortfolioList
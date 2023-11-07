import axios from 'axios';
import UpdatedForm from '../../components/UpdatedForm';
import { useCrypto } from '../../context/cryptoContext';



const PortfolioList = () => {


  const { coins, setCoins, coinToEdit, setCoinToEdit } = useCrypto();
  console.log(coins);

  const handleDelete = (id) => {
    try{
      axios({
        method: "DELETE",
        url: `/server/coins/${id}`
      }).then(() => {
        // just like when we create on the DB, and add it to frontend state
        // when we delete from DB, we need to remove from frontend state
        let newCoins = coins.filter((coin) => {
          return coin._id !== id;
        })
       
        setCoins(newCoins);
      })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>

     {coinToEdit &&  <UpdatedForm />}

      {coins.map((coin) => {
        return <div key={coin._id} >
          <h3>{coin.name}</h3>
          <button onClick={() => handleDelete(coin._id)}>DELETE</button>
          <button onClick={() => setCoinToEdit(coin)}>Edit</button>
          <p>{coin.symbol}</p>
          <p>{coin.price}</p>
          <p>Price: {order.price.$numberDecimal}</p>
        </div>
      })}
    </div>
  )
}

export default PortfolioList
import { useContext } from 'react';
import { createContext, useState } from 'react';

const CryptoContext = createContext();
export const useCrypto = () => useContext(CryptoContext);

const CryptoProvider = ({children}) => {

    // state
    const [coins, setCoins] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [coinToEdit, setCoinToEdit] = useState(null);



    console.log(currencies);
    // return provider div
    return (
        <CryptoContext.Provider value={{
            coins, setCoins,
            currencies, setCurrencies,
            coinToEdit, setCoinToEdit
        }}   >
            {children}
        </CryptoContext.Provider>
    )
}

export default CryptoProvider;
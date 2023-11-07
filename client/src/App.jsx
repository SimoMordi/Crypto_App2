import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import { useEffect } from 'react'
import { useCrypto } from './context/cryptoContext'
import HomePage from './pages/HomePage'
import PortfolioList from './pages/PortfolioList'
import CoinsForm from './pages/CoinsForm'
import CurrenciesPage from './pages/CurrenciesPage'
import LoginPage from './components/Authentication/loginPage'
import RegisterPage from './components/Authentication/RegisterPage'




function App() {
  // go get states data, put in context

  const { setCurrencies, setCoins  } = useCrypto();
  

  useEffect(() => {
    try {
      axios({
        method: "GET",
        url: "/server/currencies"
      }).then((response) => {
        // The states data should be in response.data
        setCurrencies(response.data)
      })
    }catch (error) {
      console.error(error)
    }

    try {
      axios({
        method: "GET",
        url: "/server/coins"
      }).then((response) => {
        // The states data should be in response.data
        setCoins(response.data)
      })
    }catch (error) {
      console.error(error)
    }
  }, []);



  return (
    <div>
      <Navbar />
      <Routes>
       < Route path="/" element={<HomePage />} />
        <Route path="/coins/new" element={ <PortfolioList />  }  />
        <Route path="/coins" element={ <CoinsForm />  }  />
        <Route path="/currencies" element={<CurrenciesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      
      </Routes>
    </div>
  )
}

export default App

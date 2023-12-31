import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    
     <nav className="navbar">
     <div className="navbar-container">
       <Link to="/" className="navbar-logo">
         Home CryptoApp
       </Link>
       <ul className="nav-menu">
         
         <li className="nav-item">
           <Link to="/coins/new" className="nav-links">
             My Portfolio
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/coins" className="nav-links">
           Coins
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/currencies" className="nav-links">
           Currencies
           </Link>
         </li>
         
         <li className="nav-item">
           <Link to="/login" className="nav-links">
             Login
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/register" className="nav-links">
             Register
           </Link>
         </li>
       </ul>
     </div>
   </nav>
  )
}

export default Navbar;
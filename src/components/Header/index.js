import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return (
      <header>
        <header className="h1">
          <div className='hh'>
        <h1 className='header-title'>FARAH STORE </h1>
       <Link  style={{ color: "purple", textDecoration: 'none' ,padding:'12px'}} to='/'>CATEGORIES</Link>
       <Link style={{ color: "purple", textDecoration: 'none',padding:'12px' }} to='/products'>PRODUCTS</Link>
          </div>
        </header>
      </header>
    );
};
export default Header;
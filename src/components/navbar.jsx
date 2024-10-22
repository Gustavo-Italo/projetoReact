import '../css/navbar.css';
import { Link } from 'react-router-dom';
import CartIcon from './cartIcon';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>

        <li className="navbar-item">
          <Link to="/category/hardwares" className="navbar-link">Hardwares</Link>
        </li>

        <li className="navbar-item">
          <Link to="/category/perifericos" className="navbar-link">Periféricos</Link>
        </li>

        <li className="navbar-item">
          <Link to="/category/gabinetes" className="navbar-link">Gabinetes</Link>
        </li>

        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            <CartIcon /> {/* Adicionando o ícone do carrinho */}
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;

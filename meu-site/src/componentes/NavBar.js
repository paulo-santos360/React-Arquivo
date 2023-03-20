import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'


function Navbar() {
  
  
    return (
    <ul  className={styles.li}>
      <li  >
        <Link className={styles.item} to="/">Home</Link>
      </li>

      <li>
        <Link className={styles.item} to="/empresa">Empresa</Link>
      </li>

      <li>
        <Link className={styles.item} to="/contato">Contato</Link>
      </li>
    </ul>
  );
}

export default Navbar;

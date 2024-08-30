import './style.css';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" state={'This is state from Home'}>About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/10">Posts 10</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
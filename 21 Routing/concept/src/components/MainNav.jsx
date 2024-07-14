import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              HOME 🏠
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              PRODUCTS 🛒
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Head}>
      <h1>Music Finder</h1>
      <nav>
        <Link to="/">Artist Search</Link>
      </nav>
    </header>
  );
};

export default Header;

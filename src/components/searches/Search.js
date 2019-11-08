import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ searchInput, handleChange, handleSubmit }) => {
  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <input type="text" placeholder="Artist Name" value={searchInput} onChange={handleChange} required></input>
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;

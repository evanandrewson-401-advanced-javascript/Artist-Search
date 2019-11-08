import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Artist.css';

const Artist = ({ id, name, country, disambiguation }) => {
  return (
    <section className={styles.Artist}>
      <h3>Name: {name}</h3>
      {country && <p>Country: {country}</p>}
      {disambiguation && <p>{disambiguation}</p>}
      <Link to={`/albums/${id}/${name}`}>View Discography</Link>
    </section>
  );
};

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  disambiguation: PropTypes.string
};

export default Artist;

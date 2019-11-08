import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyric.css';

const Lyric = ({ title, lyrics }) => {
  return (
    <section className={styles.Lyric}>
      <h2>{title}</h2>
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics found :,(</p>}
    </section>
  );
};

Lyric.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Lyric;

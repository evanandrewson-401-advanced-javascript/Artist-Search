import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import styles from './Albums.css';

const Albums = ({ items }) => {
  const albumList = items.map(item => {
    return <li key={item.id}><Album {...item} /></li>;
  });
  return (
    <ul className={styles.Albums}>
      {albumList}
    </ul>
  );
};

Albums.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  })).isRequired
};

export default Albums;

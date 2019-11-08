import React from 'react';
import PropTypes from 'prop-types';
import styles from './PagingButtons.css';

const PagingButtons = ({ pageUpFunction, pageDownFunction, upDisable, downDisable }) => {
  return (
    <section className={styles.PagingButtons} >
      <button disabled={downDisable} onClick={pageDownFunction}>Previous Page</button>
      <button disabled={upDisable} onClick={pageUpFunction}>Next Page</button>
    </section>
  );
};

PagingButtons.propTypes = {
  pageUpFunction: PropTypes.func.isRequired,
  pageDownFunction: PropTypes.func.isRequired,
  upDisable: PropTypes.bool.isRequired,
  downDisable: PropTypes.bool.isRequired
};

export default PagingButtons;

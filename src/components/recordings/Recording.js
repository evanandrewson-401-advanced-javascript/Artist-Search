import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Recording = ({ id, title, match }) => {
  return (
    <section id={id}>
      <Link to={`/lyrics/${match.params.artist}/${title}`}><h3>{title}</h3></Link>
    </section>
  );
};

Recording.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Recording);

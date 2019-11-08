import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Recordings from '../recordings/Recordings';
import useSongs from '../../hooks/useSongs';

const RecordPage = ({ match }) => {
  const songs = useSongs(match.params.albumId);

  return (
    <>
      <Recordings items={songs} />
    </>
  );
};

RecordPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default RecordPage;

// export default class RecordPage extends Component {
//   static propTypes = {
//     match: PropTypes.object.isRequired
//   }

//   state = {
//     songs: []
//   }

//   componentDidMount() {
//     return getSongs(this.props.match.params.albumId) 
//       .then(result => this.setState({
//         songs: result
//       }));
//   }

//   render() {
//     return (
//       <>
//         <Recordings items={this.state.songs} />
//       </>
//     );
//   }
// }

import React, { useState } from 'react';
import Lyric from '../lyrics/Lyric';
import PropTypes from 'prop-types';
import useLyrics from '../../hooks/useLyrics';

const LyricContainer = ({ match }) => {
  const [parsedArtist] = useState(match.params.artist);
  const [parsedSong] = useState(match.params.song);
  const lyrics = useLyrics(parsedArtist, parsedSong);

  return (
    <>
      <Lyric title={match.params.song} lyrics={lyrics} />
    </>
  );
};

LyricContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default LyricContainer;

// export default class LyricContainer extends Component {
//   static propTypes = {
//     match: PropTypes.object.isRequired
//   }

//   state = {
//     lyrics: '',
//     parsedArtist: decodeURIComponent(this.props.match.params.artist),   
//     parsedSong: decodeURIComponent(this.props.match.params.song)
//   }

//   componentDidMount() {
//     console.log(this.state);
//     return getLyrics(this.state.parsedArtist, this.state.parsedSong)
//       .then(result => this.setState({
//         lyrics: result.lyrics
//       }));
//   }

//   render() {
//     return (
//       <>
//         <Lyric title={this.props.match.params.song} lyrics={this.state.lyrics} />
//       </>
//     );
//   }
// }

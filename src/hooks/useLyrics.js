import { useState, useEffect } from 'react';
import getLyrics from '../components/services/getLyrics';

const useLyrics = (artist, song) => {
  const [lyrics, updateLyrics] = useState('');

  useEffect(() => {
    getLyrics(artist, song)
      .then(result => updateLyrics(result.lyrics));
  }, []);

  return lyrics;
};

export default useLyrics;

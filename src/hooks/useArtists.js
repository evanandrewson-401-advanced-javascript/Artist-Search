import { useState, useEffect } from 'react';
import getArtists from '../components/services/getArtists';

const useArtists = (searchInput, page) => {
  const [artists, updateArtists] = useState([]);

  useEffect(() => {
    if(searchInput) {
      getArtists(searchInput, page)
        .then(result => {
          updateArtists(result); 
        });
    }
  }, [page]);

  return artists;
};

export default useArtists;

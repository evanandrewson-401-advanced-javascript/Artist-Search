import { useState, useEffect } from 'react';
import getArtists from '../components/services/getArtists';

const useArtists = (didMountRef, searchInput, page, updateDownDisabled) => {
  const [artists, updateArtists] = useState([]);

  useEffect(() => {
    if(didMountRef.current) {
      getArtists(searchInput, page)
        .then(result => {
          updateArtists(result); 
        });
    } else {
      didMountRef.current = true;
    }

    return updateDownDisabled(page == 0);
  }, [page]);

  return artists;
};

export default useArtists;

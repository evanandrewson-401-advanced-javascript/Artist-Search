import { useState, useEffect } from 'react';
import getAlbums from '../components/services/getAlbums';

const useAlbums = (albumId, page) => {
  const [albums, updateAlbums] = useState([]);

  useEffect(() => {
    getAlbums(albumId, page)
      .then(result => updateAlbums(result));
  }, [page]);

  return albums;
};

export default useAlbums;

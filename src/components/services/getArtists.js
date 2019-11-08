const getArtists = (name, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=10&offset=${10 * page}`)
    .then(res => res.json())
    .then(results => results.artists.map(({ id, name, country, disambiguation }) => ({
      id,
      name,
      country,
      disambiguation
    })));
};

export default getArtists;

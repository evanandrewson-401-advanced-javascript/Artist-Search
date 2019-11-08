const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => res.json())
    .then(results => results.recordings.map(({ id, title }) => ({
      title,
      id
    })));
};

export default getSongs;

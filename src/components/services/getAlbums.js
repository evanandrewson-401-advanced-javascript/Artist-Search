const getAlbums = (id, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=10&offset=${page * 10}`)
    .then(res => res.json())
    .then(results => results.releases.map(({ id, title }) => ({
      id,
      name: title,
      cover: `http://coverartarchive.org/release/${id}/front`
    })));
};

export default getAlbums;

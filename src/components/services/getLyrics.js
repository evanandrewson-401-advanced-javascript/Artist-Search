const getLyrics = (artist, title) => {
  let urlObject = (`https://api.lyrics.ovh/v1/${artist}/${title}`).replace(' ', '_');
  return fetch(urlObject)
    .then(res => res.json());
};

export default getLyrics;

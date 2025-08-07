const Music = Application('Music');
Music.includeStandardAdditions = true;

// put artist's album name here. for example: Destroy Lonely's 'NO STYLIST'
const albumName = "NO STYLIST";
const allTracks = Music.tracks;

const albumTracks = allTracks.whose({ album: albumName })();

if (albumTracks.length === 0) {
  console.log(`No tracks found`);
} else {
  console.log(`Renumbering`);
  for (let i = 0; i < albumTracks.length; i++) {
    const track = albumTracks[i];
    /* for ns+x: 281 iterations */
    track.trackNumber = i;
  }
  console.log(" Track numbers updated successfully");
}

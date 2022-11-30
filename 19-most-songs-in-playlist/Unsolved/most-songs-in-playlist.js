// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (array) {
  // Array should be sorted so the shortest songs are added first.
  // This will ensure the highest humber of songs will be added.
  var sortedArray = array.sort();
  let songLengthTotal = 0;
  let songCount = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    const songLength = sortedArray[i];
    // The conditional here should check if adding the song at the current index would put the total length above 60 minutes.
    // If it does, then the song shouldn't be added.
    // Also there's probably a better way to do the for loop below.
    if (songLengthTotal + songLength < 60) {
      songLengthTotal = songLengthTotal + songLength;
      songCount++;
      console.log(`Total length: ${songLengthTotal} minutes`);
    } else {
      return songCount;
    }
  }
  return songCount;
};

console.log(mostSongsInPlaylist(songArray));
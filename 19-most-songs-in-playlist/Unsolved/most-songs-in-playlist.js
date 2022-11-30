// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (array) {
  var sortedArray = array.sort();
  let songLengthTotal = 0;
  let songCount = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    const songLength = sortedArray[i];

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
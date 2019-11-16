/* longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development' */

const txt = "Top Shelf Web Development Training on Scotch";

/* function longestWord(txt) {
  let wordArray = txt.split(" ");
  let maxLength = 0;
  let result = "";

  for (word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
 */

/* function longestWord(txt) {
  var result = txt.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      return currentWord;
    } else {
      return maxLengthWord;
    }
  }, "");
  return result;
} */

function longestWord(txt) {
  const sortedArray = txt
    .split(" ")
    .sort((wordA, wordB) => wordB.length - wordA.length);

  return sortedArray[0];
}

console.log(longestWord(txt));

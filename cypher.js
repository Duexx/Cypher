/* The user enters a word to be encoded
This program will produce a word replacing each letter with a corresponding letter 15 steps ahead
Eg: 'a' will be 'p'
Should a letter go beyond 'z', it will cycle back to 'a'
This program works for both uppercase and lowercase
*/

userInput = "An EnCodED MeSSagE,.!";

function encode(userWord) {
  let deficit = 0;
  let wordLength = userWord.length;
  let encodedWord = "";
  
  for (i = 0; i < wordLength; i++) {
    if (userWord.charCodeAt(i) >= 97 && userWord.charCodeAt(i) <= 122) {
      // Range of lowercase alphabet
      if (userWord.charCodeAt(i) + 15 > 122) {
        deficit = 122 - userWord.charCodeAt(i); //Finds the deficit value to determine how far it needs to wrap around past "z" to "a" and beyond as shown in the next line.
        encodedWord = encodedWord + String.fromCharCode(96 + (15 - deficit));
      } else {
        encodedWord =
          encodedWord + String.fromCharCode(userWord.charCodeAt(i) + 15);
      }
    } else if (userWord.charCodeAt(i) >= 65 && userWord.charCodeAt(i) <= 90) {
      // Range of uppercase alphabet
      if (userWord.charCodeAt(i) + 15 > 90) {
        deficit = 90 - userWord.charCodeAt(i);
        encodedWord = encodedWord + String.fromCharCode(64 + (15 - deficit));
      } else {
        encodedWord =
          encodedWord + String.fromCharCode(userWord.charCodeAt(i) + 15); // if the letter does not go beyond Z, returns the unicode value increased by 15
      }
    } else {
      encodedWord = encodedWord + String.fromCharCode(userWord.charCodeAt(i)); // Any character that isn't a letter is added as is.
    }
  }
  return encodedWord;
}

console.log("This is your encoded message: " + encode(userInput));

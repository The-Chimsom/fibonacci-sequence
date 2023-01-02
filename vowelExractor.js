// write a function called vowelExtractor(), that takes a string of any length,
//  and returns only the vowels in the string

function vowelExtractor(word) {
  const vowelInWord = [];
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      if (!vowelInWord.includes(word[i].toLowerCase())) {
        vowelInWord.push(word[i].toLowerCase());
      }
    }
  }
  console.log(vowelInWord);
}
vowelExtractor("eerta Uco`");
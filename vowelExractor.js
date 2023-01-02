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
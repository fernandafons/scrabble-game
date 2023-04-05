function getLetters(){
  let letters = [];
  while (letters.length <  2){
    const vowel = ['A', 'E', 'I', 'O', 'U'];
    var randomIndex = Math.floor(Math.random() * vowel.length);
    var randomVowel = vowel[randomIndex];
    letters.push(randomVowel);
  }

  for (let i = 0; i < 5; i++){
    const newLetter = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(65 + newLetter);
    letters.push(randomLetter);
  }
  const randomIndexvowel = Math.floor(Math.random() * letters.length);
  console.log(letters[randomIndexvowel]);
}

getLetters();
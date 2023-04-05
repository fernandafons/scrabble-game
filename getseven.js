function getInitialLetters(){
  let letters = [];
  while (letters.length <  3){
    const vowel = ['A', 'E', 'I', 'O', 'U'];
    var randomIndex = Math.floor(Math.random() * vowel.length);
    var randomVowel = vowel[randomIndex];
    letters.push(randomVowel);
  }

  for (let i = 0; i < 4; i++){
    const newLetter = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(65 + newLetter);
    letters.push(randomLetter);
  }
  console.log(letters);
}

getInitialLetters();
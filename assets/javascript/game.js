// create an array of words 
const word = ['drive', 'the winter soldier', 'crazy stupid love', 'toy story', 'starwars',];
// choose word randomly 
let randNum = Math.floor(Math.random() * word.length);
let choosenword = word[randNum];
let underScore = [];
console.log(choosenword);
// create underscores based on length of words 
let generateUnderscore = () => {
    for(let i = 0; i < choosenword.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// get users guesss
document.addEventListener('keypress', (event) => {
    let keycode = event.KeyCode;
    let keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
// check if guess is right 
// if right push to right array 
// if wrong push to wrong array 

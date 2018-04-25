
var totalLetters = [
    'a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o', 'p','q','r','s','t','u','v','w','x',
    'y','z'];	
var choosenWords =['drive','batmanbegins','greenmile', 'startrek','django','starwars','thepost', 'ratrace', 'ironman', 'speed'];
var pickedWord = "";
var letters = [];
var blanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS


function reset()
{
	//words to choose
	pickedWord = choosenWords[Math.floor(Math.random() * choosenWords.length)];
	letters = pickedWord.split('');
	blanks = letters.length;
	
	//RESET
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	totalLetters = [
        'a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o', 'p','q','r','s','t','u','v','w','x',
    'y','z'];	

	test=false;
	startGame();
}
function startGame()
{
	//Chooses word from the choosenWords
	pickedWord = choosenWords[Math.floor(Math.random() * choosenWords.length)];
	letters = pickedWord.split('');
	blanks = letters.length;
	
	//RESET
	
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	totalLetters = [
        'a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o', 'p','q','r','s','t','u','v','w','x',
        'y','z'];

	//blank generator
	for(var i = 0; i< blanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	//dom
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	
}

function compareLetters(userKey)
{
				
				if(pickedWord.indexOf(userKey) > -1)
				{
					for(var i = 0; i < blanks; i++)
					{
						if(letters[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
				
				}
				else
				{
					wrongLetters.push(userKey);
                    guessesLeft--;
                    
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
				
				}
			
			
		
}
function winLose()
{
	if(rightGuessCounter === blanks)
	{
		
        winCount++;
        
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
    }
    
	else if(guessesLeft === 0)
	{
        loseCount++;
        
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

//start game
	
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < totalLetters.length; i++)
	{	
		if(letterGuessed === totalLetters[i] && test === true)
		{
			var spliceDword = totalLetters.splice(i,1);
		
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}
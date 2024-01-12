import { useState, useCallback, useEffect } from 'react';
import words from './wordList.json';
import {HangmanDrawing, HangmanWord, Keyboard} from './Components';


function getWord(): string{
  return words[Math.floor(Math.random()* words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
  return (
    <div style= {{
      maxWidth: "900px",
      display : 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin : '0 auto',
      alignItems : 'center'
    }}>
      <div style={{fontSize: '2rem', textAlign: 'center'}}>Lose Win </div>

    </div>
  )
}

export default App

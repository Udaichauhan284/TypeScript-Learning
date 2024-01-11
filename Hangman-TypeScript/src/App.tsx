import { useState } from 'react';
import words from './wordList.json';
function getWord(): string{
  return words[Math.floor(Math.random()* words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedWord, setGuessedWord] = useState<string[]>([]);

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

import { useState, useContext } from 'react';
import './App.css';
import MainMenu from './Component/MainMenu';
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';
import {QuizContext} from './Helpers/Contexts';

function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value = {{gameState, setGameState, score, setScore}}>
          {gameState === "menu" && <MainMenu/>}
          {gameState === "quiz" && <Quiz/>}
          {gameState === "endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

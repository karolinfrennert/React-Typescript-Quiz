import React, {useState} from 'react';
import {fetchQuizQuestions, Difficulty} from './Api'

 

//components
import QuestionCard from './components/QuestionCard'
const TOTAL_QUESTIONS = 10;




const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {


  }


  return (
    <div className="App"> 
    <h1>Rect Quiz</h1>  
    <button className="start" onClick={startTrivia}>Start quiz</button>
    <p className="score"> Score:</p>
    <p>Loading Questions...</p>
    {/*<QuestionCard
    questionNumber={number + 1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].questions}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number] : undefined}
    callback={checkAnswer}
    
    
    
    />*/}
    <button className="next" onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;

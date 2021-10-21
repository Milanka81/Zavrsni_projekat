import React, {useState, useEffect} from 'react';
import { getAllQuestions } from '../service.js';
import Questionaire from './Questionaire.jsx'
import { useHistory } from "react-router";
import BackgroundStyle from './styled/Background.style.js';
import ButtonStyle from './styled/Submit';



const Quiz = ({loggedIn}) => {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const history = useHistory()

  useEffect(() =>{
    if(!loggedIn){
      history.push('/login')
      return
    }
    getAllQuestions()
      .then(res =>  res.data)
      .then(data => {const questions = data.results.map((question) => ({
          ...question, answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))
        setQuestions(questions)
      });
  },[])


  const handleAnswer = (answer) => {
    if(!showAnswers){
      if(answer === questions[currentIndex].correct_answer){
        setScore(score+1);
      }
    }
    

    setShowAnswers(true);
    
  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex+1);
    setShowAnswers(false);
  }


  return ( questions.length > 0 ? (
    
      <BackgroundStyle>
    <div className="container">
      {currentIndex >= questions.length ? (<>
      <h1>Game Ended, Your Score is {score}</h1> 
      <ButtonStyle  onClick={() => history.push("/")}>HomePage</ButtonStyle></>)
      : 
      (
      <Questionaire   handleAnswer={handleAnswer}
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}
        data={questions[currentIndex]}/>
        )}
    </div>
    </BackgroundStyle>
  ) : <div className="container">Loading...</div>
  );
 
}
 
export default Quiz;

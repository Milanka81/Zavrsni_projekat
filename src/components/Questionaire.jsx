import React from 'react'
import ButtonStyle from './styled/Submit';
import WrapperStyle from './styled/Wrapper.style';
import '../App.css';
import QuestionStyle from './styled/QuestionStyle';


function Questionaire({handleAnswer,showAnswers,handleNextQuestion, data:{question, correct_answer, answers}}) {
    return (
        <>
            <QuestionStyle>
                <h1 dangerouslySetInnerHTML={{__html:question}} />
            </QuestionStyle>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? "green-button": "red-button"
                    ) : "";
                    return(
                        <WrapperStyle>
                        <button className={`normal-button ${specialClassName}`} 
                        onClick = {() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}} />
                        </WrapperStyle> )
                })}
                  {showAnswers && (<ButtonStyle onClick = {handleNextQuestion}>Next</ButtonStyle>
            )}
            </div>
          
        </>
    )
}

export default Questionaire
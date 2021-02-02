import { useState,useContext } from 'react';
import {QuizContext} from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank";
import '../App.css';
function Quiz() {

    const {score, setScore, setGameState} = useContext(QuizContext);
    const [CurrQuestion, setCurrQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState("");

    const nextQuestion = () => {
        if(Questions[CurrQuestion].answer == optionChoosen){
            setScore(score + 1);
        }
        setCurrQuestion(CurrQuestion + 1);
    };

    const finishedQuiz = () =>{
        if(Questions[CurrQuestion].answer == optionChoosen){
            setScore(score + 1);
        }
        setGameState("endscreen");
    }
    return (
        <div className = "quiz">
            <h1>{Questions[CurrQuestion].promp}</h1>
            <div className = "options">
                <button onClick ={() => setOptionChoosen("A")}> 
                    {Questions[CurrQuestion].optionA} 
                </button>
                <button onClick ={() => setOptionChoosen("B")}>
                    {Questions[CurrQuestion].optionB}
                </button>
                <button onClick ={() => setOptionChoosen("C")}>
                    {Questions[CurrQuestion].optionC} 
                </button>
                <button onClick ={() => setOptionChoosen("D")}> 
                    {Questions[CurrQuestion].optionD} 
                </button>
            </div>
            
            {CurrQuestion == Questions.length - 1 ? (
                <button id= "btn_div" onClick ={finishedQuiz}> Finished Quiz </button>
            ):(
                <button id= "btn_div" onClick ={nextQuestion}> Next Question </button>
            )}
        </div>
    )
}

export default Quiz;

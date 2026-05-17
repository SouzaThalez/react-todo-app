import { useState } from "react";
import Results from "./results";

function List(){

    const listBankActions = [
            {
                question: 'Choose a bank for your next motorcycle financing:',
                banks: ['Berlin Bank', 'Roma Bank', 'Yamaha Bank'],
                answer: 'Yamaha Bank'
            },

            {
                question: 'Which bank offers the best savings account?',
                banks: ['Safe Money Bank', 'Future Credit', 'Roma Bank'],
                answer: 'Safe Money Bank'
            },

            {
                question: 'Which bank would you choose for investments?',
                banks: ['Berlin Bank', 'Prime Invest', 'Digital Trust'],
                answer: 'Prime Invest'
            }
    ]


    const initialAnswers =  [null,null,null];
    const [userAnswers , setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    
    // if selectedAnswer is null user has not selected any wanswer
    const selectedAnswer = userAnswers[currentQuestion]; 

    function handleSelectedOption(option: any){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
      
        setUserAnswers(newUserAnswers);
        console.log(newUserAnswers)
    }

    function goToNext(){
        if(currentQuestion == listBankActions.length -1){
            setIsQuizFinished(true);
        }else{
            setCurrentQuestion(currentQuestion + 1);
        }
        
    }

    function goToPrevious(){
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
        
    }

    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    //If its the last question answered return new component
    if(isQuizFinished){
        return <Results 
        questionBank={listBankActions} 
        userAnswers={userAnswers} 
        restartQuiz={restartQuiz}
        />;
    }


    return(
        <div>
            <h2>Give us your feedback !</h2>
            <p>{listBankActions[currentQuestion].question}</p>
            {listBankActions[currentQuestion].banks.map((option) =>
                <div className={"selection-container" + (selectedAnswer === option ? " selected" : '')} 
                    onClick={() => handleSelectedOption(option)}
                    key={option}>
                    {option}
                </div>
            )}

            <p>Selected Option: {selectedAnswer}</p>

            <div className="nav-buttons">

                <button className="buttons" 
                        onClick={goToPrevious} 
                        disabled={currentQuestion === 0}>Previous</button>

                <button className="buttons" 
                        onClick={goToNext} 
                        disabled={!selectedAnswer}>
                        {currentQuestion == listBankActions.length -1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default List;
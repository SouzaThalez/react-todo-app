import { useState } from "react";

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

    // let selectedOption = 'None';
    const [selectedOption, setOptionSelected] = useState('None');
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleSelectedOption(option: string){
        setOptionSelected(option)
    }

    function goToNext(){
        setCurrentQuestion(currentQuestion + 1);
    }

    function goToPrevious(){
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
        
    }

    return(
        <div>
            <h2>Give us your feedback !</h2>
            <p>{listBankActions[currentQuestion].question}</p>
            {listBankActions[currentQuestion].banks.map((option) =>
                <div className="selection-container"
                    onClick={() => handleSelectedOption(option)}>
                    {option}
                </div>
            )}

            <p>Selected Option: {selectedOption}</p>

            <div className="nav-buttons">
                <button className="buttons" onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button className="buttons" onClick={goToNext}>Next</button>
            </div>
        </div>
    )
}

export default List;
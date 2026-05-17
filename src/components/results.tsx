function Results({questionBank, userAnswers, restartQuiz}: any){

    function getScore(){
        let finalScore = 0;
        userAnswers.forEach((answer: string, index: number) => {
            if(answer == questionBank[index].answer){
                finalScore++
            }
        });

        return finalScore

    }

    const score = getScore();
   
    return <div className="results-container">
            <h2>Quiz Finished!</h2>
            <p>Your Score is : {score}/{questionBank.length}</p>
            <button className="buttons"
                    onClick={restartQuiz}>
                    Restart Quiz
            </button>
    </div>
}

export default Results;
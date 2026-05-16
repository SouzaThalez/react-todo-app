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



    return(
        <div>
            <h2>Give us your feedback !</h2>
            {listBankActions[0].question}
        </div>
    )
}

export default List;
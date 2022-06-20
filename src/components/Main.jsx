import { nanoid } from "nanoid";
import React from "react";

function Main() {

    const [trivia, setTrivia] = React.useState([])
    //const [questions, setQuestion] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setTrivia(data.results))
    }, [])
    console.log(trivia)

    const triviaElements = trivia.map(trivia => {
        return <div>
                    {trivia.question} 
                    <div>
                        {trivia.correct_answer} 
                        {trivia.incorrect_answers}
                    </div>
                </div>
    })

    //console.log(triviaElements)

    // function getQuestions() {
    //     const newQuestion = []
    //     for (let i = 0; i < 5; i++) {
    //         newQuestion.push(Math.ceil(Math.random() * trivia.length))
    //     }

    //     newQuestion.map((trivia) => {
    //         return trivia.question
    //     })

    //     setQuestion (newQuestion)

    //     // const questions = trivia.map(trivia => {
    //     //         return <div>{trivia.question}</div>
    //     //     })
    //     // const array = []
    //     // for (let i = 0; i < 5; i++) {
    //     //     array.push(getNewQuestions())
    //     // }
    //     // return questions
    // }
    //console.log(getNewQuestions())
    // function getQuestions () {
    //     const array = []
    //     for (let i = 0; i < 5; i++) {
    //         array.push(getNewQuestions())
    //     }
    //     return array
    // }

    return (
        <div>
            {triviaElements}
        </div>
    )
}

export default Main;

// const [trivia, setTrivia] = React.useState([])

    // React.useEffect(() => {
    //     fetch("https://opentdb.com/api.php?amount=10")
    //         .then(res => res.json())
    //         .then(data => setTrivia(data.results))
    // }, [])
    // console.log(trivia)

    // const triviaElements = trivia.map(trivia => {
    //     return trivia.question
    // })

    // console.log(triviaElements)
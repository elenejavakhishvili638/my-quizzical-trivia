import React from "react";
// import { useDispatch } from "react-redux";
// import { holdAnswer } from "../components/store/holdAnswerSlice";
import Loading from "./Loading";
import "./Main.css";

function Main() {
  const [trivia, setTrivia] = React.useState([]);
  const [correctAnswer, setCorrectAnswer] = React.useState([]);
  const [holdAnswerItem, setHoldAnswerItem] = React.useState([]);
  const [select, setSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  // const holdAnswerItem = useSelector((state) => state.answer.answer);
  // const dispatch = useDispatch();

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTrivia(
          data.results.map((category) => {
            const incorrectAnswersIndexes = category.incorrect_answers.length;
            const randomIndex =
              Math.random() * (incorrectAnswersIndexes - 0) + 0;
            category.incorrect_answers.splice(
              randomIndex,
              0,
              category.correct_answer
            );
            return {
              ...category,
              answers: category.incorrect_answers,
            };
          })
        );
      });
  }, []);
  // console.log(trivia);

  const questions = trivia.map((item) => {
    return item.question;
  });

  React.useEffect(() => {
    let corAnswer = [];
    for (let i = 0; i < trivia.length; i++) {
      corAnswer.push({
        key: trivia[i].question,
        value: trivia[i].correct_answer,
      });
    }
    setCorrectAnswer(corAnswer);
  }, [trivia]);

  function handleClick(name, question) {
    let newAnswers = holdAnswerItem.filter((item) => item.key !== question);

    setHoldAnswerItem([...newAnswers, { key: question, value: name }]);
  }

  // console.log(holdAnswerItem);

  const correctAnswers = () => {
    let count = 0;

    for (let i = 0; i < holdAnswerItem.length; i++) {
      for (let j = 0; j < correctAnswer.length; j++) {
        if (
          holdAnswerItem[i].value === correctAnswer[j].value &&
          holdAnswerItem[i].key === correctAnswer[j].key
        ) {
          count++;
        }
      }
    }
    return count;
  };

  const handleAnswer = (selected, question, incorrectAnswer) => {
    if (!select) {
      for (let i = 0; i < holdAnswerItem.length; i++) {
        if (
          holdAnswerItem[i].key === question &&
          holdAnswerItem[i].value === selected
        )
          return "clicked-answer";
      }
    } else if (select) {
      for (let i = 0; i < correctAnswer.length; i++) {
        for (let j = 0; j < holdAnswerItem.length; j++) {
          if (
            correctAnswer[i].key === question &&
            correctAnswer[i].value === selected
          ) {
            return "correct";
          }
          if (
            holdAnswerItem[j].key === question &&
            correctAnswer[i].key === question &&
            holdAnswerItem[j].value === selected &&
            correctAnswer[i].value === selected
          ) {
            return "correct";
          } else if (
            holdAnswerItem[j].key === question &&
            correctAnswer[i].key === question &&
            holdAnswerItem[j].value === selected &&
            correctAnswer[i].value !== selected
          ) {
            return "wrong";
          }
        }
      }
      if (incorrectAnswer) {
        return "others";
      }
    }
  };

  return (
    <div className="main-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="quizz-container">
          {trivia.map((trivia, index) => {
            return (
              <div className="quiz-wrap" key={index}>
                <div className="quiz">
                  <h2 className="question">{decodeHtml(trivia.question)}</h2>
                  <div className="btn-container">
                    {trivia.answers.map((inc, index) => {
                      return (
                        <button
                          onClick={() =>
                            handleClick(
                              inc,
                              trivia.question,
                              trivia.correct_answer
                            )
                          }
                          key={index}
                          className={`answers ${handleAnswer(
                            inc,
                            trivia.question,
                            trivia.incorrect_answers
                          )}`}
                        >
                          {decodeHtml(inc)}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="last-btn-container">
            {!select ? (
              <button
                className="check-answer"
                onClick={() => {
                  setSelected(true);
                }}
              >
                Check answers
              </button>
            ) : (
              <div className="play-again-container">
                <p>
                  {`You scored ${correctAnswers()} / ${
                    questions.length
                  } correct answers`}
                </p>
                <button
                  className="play-again"
                  onClick={() => {
                    window.location.reload(false);
                  }}
                >
                  Play again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;

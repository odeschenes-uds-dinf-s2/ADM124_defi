import './App.css';
import React, {useEffect, useRef} from 'react';
import Questions from './questions.json';
import Question from "./component/Question/Question";

function App() {
  const [answered, setAnswered] = React.useState([]);
  const [won, setWon] = React.useState(false);
  const refs = useRef([])

  const handleAnswer = (index) => {
    if (answered.find((item) => item.index === index.index) !== undefined) {
      return
    }

    setAnswered((answered) => [...answered, index]);

    if (index.index !== Questions.length - 1) {
      refs.current[index.index + 1].scrollIntoView({behavior: 'smooth'})
    }
  }

  const handleWin = () => {
    setWon(true);
  }

  useEffect(() => {
    refs.current = refs.current.slice(0, Questions.length)
  }, [Questions])

  useEffect(() => {
    if (answered.length === Questions.length) {
      handleWin();
    }
  }, [answered]);

 /* if (won) {
    return <div>You won!</div>
  }*/

  return (
    <div className="app">
      {
        Questions.map((question, index) => {
          return <Question
            innerRef={(el) => {
              refs.current[index] = el
            }}
            key={index}
            question={question}
            callback={handleAnswer}
            index={index}
            reason={question.reason}
            lastQuestion={index === Questions.length - 1}
          />
        })
      }
      <div className={'scoreboard'}>
        <ul>
          {answered.map((index) => {
            return <li key={'sq-q-#' + index.index} className={index.good ? 'good' : 'bad'}>Question {index.index + 1}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

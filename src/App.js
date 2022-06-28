import './App.css';
import React, {useEffect, useRef} from 'react';
import Questions from './questions.json';
import Question from "./component/Question/Question";

const ws = new WebSocket('ws://127.0.0.1:8080');

function App() {
  const [answered, setAnswered] = React.useState([]);
  const [won, setWon] = React.useState(false);
  const [messages, SetMessages] = React.useState([]);
  const [username, setUsername] = React.useState('');
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

/*  useEffect(() => {
    ws.onopen = () => {
      console.log("OPEN")
    }

    ws.onmessage = (data) => {
      SetMessages((m) => [...m, data])
    }
  }, [])

  /!* if (won) {
     return <div>You won!</div>
   }*!/

  const test = () => {
    ws.send(`[${username}] > Hi !`)
  }*/

  return (
    <div className="app">
{/*
      <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
      <button onClick={test}>test</button>
      <ul>
        {messages.map((m, i) => <li key={i}>{m.data}</li>)}
      </ul>
*/}

      {Questions.map((question, index) => {
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
      })}

      <div className={'scoreboard'}>
        <ul>
          {answered.map((index) => {
            return <li key={'sq-q-#' + index.index}
                       className={index.good ? 'good' : 'bad'}>Question {index.index + 1}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

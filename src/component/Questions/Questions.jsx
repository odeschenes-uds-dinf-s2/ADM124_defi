import * as React from 'react';
import QuestionsData from '../../questions.json';
import Question from "../../component/Question/Question";
import {useRef, useEffect, useState} from "react";

export function Questions() {
  const [answered, setAnswered] = useState([]);
  const [won, setWon] = useState(false);
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
  return (
    <div className={'app'}>
      {
        QuestionsData.map((question, index) => {
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
    </div>
  );
};

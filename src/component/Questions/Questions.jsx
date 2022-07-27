import * as React from 'react';
import QuestionsData from '../../questions.json';
import Question from "../../component/Question/Question";
import {useRef, useEffect, useState} from "react";
import {QuestionsEnd} from "../QuestionsEnd/QuestionsEnd";

export function Questions() {
  const [answered, setAnswered] = useState([]);
  const [end, setEnd] = useState(false);
  const refs = useRef([])

  const handleAnswer = ({index, good}) => {
    if (answered.find((item) => item.index === index) !== undefined) {
      return
    }

    if ((answered.length + 1) === QuestionsData.length) {
      setEnd(true);
    }

    setAnswered((answered) => [...answered, {index, good}]);

    if (index !== QuestionsData.length - 1) {
      refs.current[index + 1].scrollIntoView({behavior: 'smooth'})
    }
  }

  useEffect(() => {
    refs.current = refs.current.slice(0, QuestionsData.length)
  }, [])


  return (
    <div>
      {
        end ? <QuestionsEnd answers={answered} questions={QuestionsData}/> :
          <div className={'app'}>
            {QuestionsData.map((question, index) => {
              return <Question
                innerRef={(el) => {
                  refs.current[index] = el
                }}
                key={index}
                question={question}
                callback={handleAnswer}
                index={index}
                reason={question.reason}
                lastQuestion={index === QuestionsData.length - 1}
              />
            })}
          </div>
      }
    </div>
  );
};

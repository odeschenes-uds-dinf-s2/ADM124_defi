import React, {useRef, useState} from 'react';
import './Question.css';

const Question = (props) => {
  const {
    question,
    callback,
    index,
    reason,
    lastQuestion,
    innerRef
  } = props;

  const [locked, setLocked] = useState(false);

  const refNextButton = useRef();

  const [selectedAnswer, setSelectedAnswer] = useState({
    index: null,
    good: null
  });

  const handleNextQuestion = () => {
    callback({index: index, good: selectedAnswer.good});
  }

  const handleSelection = (index) => {
    if (locked) {
      return
    }

    setLocked(true);
    const good = index === question.answer;

    setSelectedAnswer({
      index: index,
      good: good
    });

    refNextButton.current.focus()
  }

  return (
    <section className={'question'} ref={innerRef} id={'question-' + index}>
      <header>
        {question.question}
      </header>
      <ul className={`questions-list`}>
        {question.choices.map((choice, i) => {
          return <li
            onClick={() => handleSelection(i)}
            key={choice + "" + i}
            className={
              `${selectedAnswer.index === i ? "selected " : ""}` +
              `${selectedAnswer.index === i ? selectedAnswer.good ? "good" : "bad" : ''}` +
              `${locked ? " locked" : ""}`
            }>
            {choice}
          </li>
        })}
      </ul>
      <div style={{visibility: selectedAnswer.index !== null ? 'visible' : 'hidden'}}>
        <button className={'default'} onClick={handleNextQuestion} ref={refNextButton}>
          {
            lastQuestion ? 'Finir le questionnaire' : 'Prochaine question'
          }
        </button>
      </div>
      {
        selectedAnswer.index !== null ?
          <div className={`reason ${selectedAnswer.index === question.answer ? 'good' : 'bad'}`}>
            {reason}
          </div> :
          null
      }
    </section>
  );
};

export default Question
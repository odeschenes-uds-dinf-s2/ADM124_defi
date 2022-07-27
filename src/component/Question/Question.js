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
    <section className={'question flex justify-start'} ref={innerRef} id={'question-' + index}>
      <header>
        {question.question}
      </header>
      <div className={'question-body flex flex-col h-full justify-between'}>
        <div className={'questions-container flex items-center justify-center flex-col h-full'}>
          <div className={'flex w-fit'}>
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
          </div>
          <div className={'flex justify-center mt-5'} style={{visibility: selectedAnswer.index !== null ? 'visible' : 'hidden'}}>
            <button className={'default'} onClick={handleNextQuestion} ref={refNextButton}>
              {
                lastQuestion ? 'Finir le questionnaire' : 'Prochaine question'
              }
            </button>
          </div>
        </div>
        <div style={{visibility: selectedAnswer.index !== null ? 'visible' : 'hidden'}} className={`reason ${selectedAnswer.index === question.answer ? 'good' : 'bad'}`}>
          {reason}
        </div>
      </div>
    </section>
  );
};

export default Question

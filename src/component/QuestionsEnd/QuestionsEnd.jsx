import * as React from 'react';
import {useCallback, useEffect, useState} from "react";
import './questions-end.css';
import {Link} from "react-router-dom";

export function QuestionsEnd({answers, questions}) {
  const [wins, setWins] = useState(0);

  useEffect(() => {
    setWins(answers.filter((item) => item.good).length);
  }, [answers, questions])

  return (
    <div className={'questions-end-container flex flex-col items-center'}>
      <div className={'questions-end space-y-6 p-12 rounded-xl bg-white w-fit'}>
        <div>
          <h1 className={'text-udes-100 text-6xl'}>Vos résultats</h1>
        </div>
        <div className={'scoreboard'}>
          <ul className={'flex flex-col space-y-2'}>
            {
              questions.map((question, index) => {
                return (
                  <li
                    key={index}
                    className={`flex space-x-3 ${answers.find((a) => a.index === index).good ? 'good' : 'bad'}`}
                    data-index={index}
                  >
                    <div>
                      {question.question}
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className={'flex flex-col items-center mt-5'}>
            {
              <div className={`text-5xl font-extrabold ${(wins / answers.length * 100).toFixed(0) > 50 ? 'text-udes-100' : 'text-red-500'}`}>
                {(wins / answers.length * 100).toFixed(0)}%
              </div>
            }
          </div>
        </div>
        <div className={'flex justify-center'}>
          <Link to={'/informations'} className={'bg-blue-500 link'}>
            En savoir plus
            <i className="fa-solid fa-link fa-fw ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

import * as React from 'react';
import {useEffect} from "react";
import './questions-end.css';
import {Link} from "react-router-dom";

export function QuestionsEnd({answers, questions}) {
  useEffect(() => {
    console.log(answers, questions)
  }, [answers])

  return (
    <div className={'questions-end-container flex flex-col items-center'}>
      <div className={'questions-end space-y-6 p-12 rounded-xl bg-white w-fit'}>
        <div>
          <h1 className={'text-udes-100 text-6xl'}>Vos résultats</h1>
        </div>
        <div>
          <ul className={'flex flex-col'}>
            {
              questions.map((question, index) => {
                return (
                  <li key={index} className={'flex space-x-3'}>
                    <div>
                      #{index + 1}
                    </div>
                    <div>
                      {question.question}
                    </div>
                  </li>
                )
              })
            }
          </ul>
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

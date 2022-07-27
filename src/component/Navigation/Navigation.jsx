import * as React from 'react';
import './navigation.css';
import {NavLink} from "react-router-dom";

export function Navigation() {
  return (
    <nav className={'navigation flex [&>div]:space-x-5 px-10 justify-center items-center'}>
      <div className={'flex mr-auto'}>
        <div>
          <NavLink to={'/'}>
            <span className={'hidden sm:inline'}>
              Transfert de connaissances
            </span>
            <span className={'visible sm:hidden'}>
              <i className="fa-solid fa-house"></i>
            </span>
          </NavLink>
        </div>
      </div>
      <div className={'flex ml-auto'}>
        <div>
          <
            NavLink
            to={'/informations'}
          >
             <span className={'hidden sm:inline'}>
              Informations
            </span>
            <span className={'visible sm:hidden'}>
              <i className="fa-solid fa-circle-info"></i>
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to={'/questionnaire'}>
            <span className={'hidden sm:inline'}>
              Questionnaire
            </span>
            <span className={'visible sm:hidden'}>
              <i className="fa-solid fa-list"></i>
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

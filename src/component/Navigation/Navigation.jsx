import * as React from 'react';
import './navigation.css';
import {NavLink} from "react-router-dom";

export function Navigation() {
  return (
    <nav className={'navigation flex [&>div]:space-x-5 px-10 justify-center items-center'}>
      <div className={'flex mr-auto'}>
        <div>
          <NavLink to={'/'}>
            Transfert de connaissance
          </NavLink>
        </div>
      </div>
      <div className={'flex ml-auto'}>
        <div>
          <
            NavLink
            to={'/informations'}
          >
            Informations
          </NavLink>
        </div>
        <div>
          <NavLink to={'/questionnaire'}>
            Questionnaire
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

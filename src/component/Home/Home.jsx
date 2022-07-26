import * as React from 'react';
import './home.css';
import Img from './meeting.svg'
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div className={'home flex justify-center'}>
      <div className={'flex justify-center space-x-10'}>
        <div className={'flex flex-col'}>
          <div>
            <h1 className={'home-title'}>
              Le Transfert<br />de Connaissances
            </h1>
          </div>
          <div>
            Par Olivier Deschênes, Noemie Dallaire-Nicholas, Olivier Mailhot <br />et Jean-Sébastion Paquette
          </div>
          <div className={'home-links flex mt-5 justify-center space-x-5'}>
            <Link className={'bg-blue-500'} to={'/informations'} >Informations</Link>
            <Link className={'bg-udes-100'} to={'/questionnaire'}>Questionnaire</Link>
          </div>
        </div>
        <div>
          <img className={'home-img'} src={Img} alt=""/>
        </div>
      </div>
    </div>
  );
};

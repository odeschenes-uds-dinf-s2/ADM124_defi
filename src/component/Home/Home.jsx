import * as React from 'react';
import './home.css';
import Img from './meeting.svg'
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div className={'home flex justify-center pt-5rem sm:pt-20rem items-start'}>
      <div className={'flex space-x-10 flex-col-reverse sm:flex-row'}>
        <div className={'flex flex-col p-5 sm:p-0'}>
          <div>
            <h1 className={'home-title'}>
              Le Transfert<br />de Connaissances
            </h1>
          </div>
          <div>
            Par Olivier Deschênes, Noemie Dallaire-Nicholas, Olivier Mailhot <br />et Jean-Sébastien Paquette
          </div>
          <div className={'home-links flex mt-5 justify-center space-x-5'}>
            <Link className={'bg-blue-500 link'} to={'/informations'} >Informations</Link>
            <Link className={'bg-udes-100 link'} to={'/questionnaire'}>Questionnaire</Link>
          </div>
        </div>
        <div>
          <img className={'home-img'} src={Img} alt=""/>
        </div>
      </div>
    </div>
  );
};

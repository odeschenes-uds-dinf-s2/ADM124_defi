import './App.css';
import React from 'react';
import {Navigation} from "./component/Navigation/Navigation";
import {Route, Routes} from "react-router";
import {Questions} from "./component/Questions/Questions";
import {Informations} from "./component/Informations/Informations";
import {Home} from "./component/Home/Home";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path={'/questionnaire'} element={<Questions />}/>
        <Route path={'/informations'} element={<Informations />}/>
      </Routes>
    </div>
  );
}

export default App;

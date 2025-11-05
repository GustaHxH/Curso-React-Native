//Componentes
import FisrtComponent from  "./components/FirstComponent"
import TemplateExpressions from "./components/TemplateExpressions"

//Styles //CSS
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <h1>Fundamentos React</h1>
        <FisrtComponent/>
        <TemplateExpressions/>
      </div>
    </>
  );
};

export default App;
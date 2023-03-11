
import  React, { useState} from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('pink'); // whether dark mode is enabled or not
  const [alert, setAlert]= useState (null);

  const showAlert =(message, type) => {
        setAlert({
          msg: message,
          type: type,
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'pink')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#322525';
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 2000);
    }
    else{
      setMode('pink');
      document.body.style.backgroundColor = 'pink';
      showAlert("Light Mode has been Enabled", "success");
      // document.title = "TextUtils - Light Mode"
      
    }
  };
  return (
    <>
    <style>{'body {background-color: pink;}'}</style>
    <Navbar title="CounterText" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      
      
    
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm  showAlert={showAlert} heading="Enter Text to Analyse" mode={mode} />}/>
        {/* <Route path="/home" element={<About/>}/> */}
          <Route path="about" element={<About/>} />
          
          
        
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;


import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const darkMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      
      document.body.style.background='#2f383b';
    }
    else{
      setMode('light')
      document.body.style.background='white';
    }
  }
  return (
    
      <>
      <NoteState>
      <BrowserRouter>
      <Navbar showAlert={showAlert} mode={mode} darkMode={darkMode}/>
      <Alert alert={alert}/>
      <div className="container my-2">
      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert}  mode={mode}/>}/>
      <Route exact path="about" element={<About showAlert={showAlert} mode={mode}/>} />
      <Route exact path="login" element={<Login showAlert={showAlert} mode={mode}/>} />
      <Route exact path="signup" element={<Signup showAlert={showAlert} mode={mode} />} />
        
    </Routes>
    </div>
      </BrowserRouter>
      </NoteState>
      </>
    
  );
}

export default App;

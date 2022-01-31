import React,{useEffect} from 'react';
import Notes from './Notes';
import LoginDivert from './LoginDivert';




const Home = (props) => {
  
  return (<>

    {!localStorage.getItem('token') && <LoginDivert mode={props.mode}/>}
    
    {localStorage.getItem('token') && <Notes showAlert={props.showAlert} mode={props.mode}/>}
  </>);
};

export default Home;

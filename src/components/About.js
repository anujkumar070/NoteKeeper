import {React ,useContext, useEffect }from 'react';
import noteContext from '../context/notes/noteContext';

const About = (props) => {
    
    
  return <div><strong>
        <div className={`accordion accordion-flush text-center shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'}`} id="accordionFlushExample" style={{ margin:"30px", padding:"30px"}}>
    <div className={`accordion-item text-center bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
      <h2 className="accordion-header" id="flush-headingOne">
        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'white'} `} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          What does this website do?
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">You can store your note in the cloud by using this website. You can add, edit ,delete ,view your note anytime,anyplace at your own choice.</div>
      </div>
    </div>
    <div className={`accordion-item text-center bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
      <h2 className={`accordion-header bg-${props.mode} text-${props.mode==='light'?'dark':'white'} `} id="flush-headingTwo">
        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'white'} `} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          How Secure my notes are?
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Your Note is safely secured in cloud</div>
      </div>
    </div>
    <div className={`accordion-item text-center bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
      <h2 className="accordion-header" id="flush-headingThree">
        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'white'} `} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Developer Details
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Developed by Anuj Kumar Sahu</div>
      </div>
    </div>
  </div></strong>
    </div>;
};

export default About;

import React from 'react';
import Login from './login.png';
import {Link } from 'react-router-dom'

const LoginDivert = (props) => {
  return <div>
                <div className={`card shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'}`}  >
        <img src={Login} className="card-img-top" alt="Please Login"/>
        <div className="card-body">
            <h2 className="card-text text-center"><strong>Login to Continue using App</strong>
            <Link to='/login'><button className='btn btn-primary mx-3'>Login</button></Link></h2>
        </div>
    </div>
  </div>;
};

export default LoginDivert;

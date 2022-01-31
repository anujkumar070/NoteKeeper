import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credientails, setCredientails] = useState({email:"",password:""});
    let navigate = useNavigate();
    const onChange = (e)=>{
        setCredientails({...credientails, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://notekeeperapplication.herokuapp.com/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',

              },
            body: JSON.stringify({ email:credientails.email, password:credientails.password })
          });
          const json = await response.json(); 
          //console.log(json);
        if (json.success){
            // Save the auth token and redirect
            props.showAlert("Login Successful","success")
            localStorage.setItem('token', json.authtoken); 
            navigate("/");

        }
        else{
          props.showAlert("Invalid Credentials","danger")
        }
          

    }
  return <div className={`container mt-3 my-3 shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'}`} style={{maxHeight:"600px",maxWidth:"600px"}}>
    
    <h2 className='text-center'>Login in your Account</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email"  onChange={onChange} value={credientails.email} aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"  className="form-control" name="password" id="password" onChange={onChange} value={credientails.password} placeholder="Password"/>
        </div>
        <div className='text-center mt-2'>
        <button type="submit" className="btn btn-primary my-2 btn-lg">&#160;&#160;&#160;&#160;Submit &#160;&#160;&#160;&#160;</button>
        </div>
</form>
  </div>;
};

export default Login;

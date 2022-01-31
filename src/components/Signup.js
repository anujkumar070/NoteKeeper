import React ,{useState}from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  const [credientails, setCredientails] = useState({name:"",email:"",password:"",cpassword:""});
  let navigate = useNavigate();
  const onChange = (e)=>{
      setCredientails({...credientails, [e.target.name]: e.target.value})
  }

  const handleSubmit= async (e)=>{
      e.preventDefault();
      if(credientails.cpassword ===credientails.password){
      const response = await fetch(`https://notekeeperapplication.herokuapp.com/api/auth/createuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
          body: JSON.stringify({ name:credientails.name,email:credientails.email, password:credientails.password })
        });
        const json = await response.json(); 
        
      if (json.success){
        props.showAlert("Account Created Successfully","success")
          localStorage.setItem('token', json.authtoken); 
          navigate("/");
          

      }
      else{
        props.showAlert("SignUp Failed, Try Again with Correct Details","danger")

      }}
      else{
          props.showAlert("Confirm Password should be Same","danger")
      }
        

  }

  return <div className={`container mt-3 my-2 shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'} `} style={{maxHeight:"700px",maxWidth:"700px"}}>

    <h2 className='text-center'>Create Your Account Here</h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group my-2">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name"  onChange={onChange} required minLength={3} value={credientails.name} aria-describedby="emailHelp" placeholder="Enter Name"/>
             </div>
        <div className="form-group my-2">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email"  onChange={onChange} required  value={credientails.email} aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-2">
            <label htmlFor="password">Password</label>
            <input type="password"  className="form-control" name="password" id="password" onChange={onChange} required minLength={5} value={credientails.password} placeholder="Password"/>
        </div>
        <div className="form-group my-2">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password"  className="form-control" name="cpassword" id="cpassword" onChange={onChange} required minLength={5} value={credientails.cpassword} placeholder="Password"/>
        </div>
        <div className='text-center '>
        <button type="submit " className="btn btn-primary my-1 text-center btn-lg" >&#160;&#160;&#160;Submit&#160;&#160;&#160;</button>
        </div>
</form>
  </div>;
};

export default Signup;

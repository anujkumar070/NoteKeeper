import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  React.useEffect(() => {
    //console.log([location.pathname]);
  }, [location]);

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    props.showAlert("Logged Out Successfully" ,"success")
    navigate('/login')
  }
  
  return(
  <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `} style={{minHeight:"80px"}}>
    <div className="container-fluid ">
      <Link className="navbar-brand" to="/">
        NoteKeeper
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=="/"?"active":""}`} aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=="/about"?"active":""}`}  to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mt-2 mx-2">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkMode}/>
            <label className={`form-check-label text-${props.mode==='light'?'dark':'white'}`}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

          </li>

          
        </ul>
        {!localStorage.getItem('token')?<form className="d-flex">
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary  mx-3" to="/signup"role="button">Sign-Up</Link>
        </form>:<button className="btn btn-danger mx-3" onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  </nav>);
};

export default Navbar;

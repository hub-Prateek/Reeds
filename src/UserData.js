import React,{useState} from 'react'
import {Link} from "react-router-dom";

export default function SignUp() {
  const [userdata,setuserdata] = useState({
    tittle:"",
    email:"",
    contact:"",
    description:"",
    price:""
  });
  function handleChange(event){
    console.log(event)
    const {name,value} = event.target;
    // console.log(userdata.event.target.value)
    setuserdata(previousdata=>{
      return{
        ...previousdata,
        [name]:value
      }
  });
  };
  function handleSubmit(event){
    event.preventDefault();
    console.log(userdata);

  }
  return (
    <>
      <div className="SignUp-Box">
          <h2>UserData</h2>
          <form onSubmit={handleSubmit}>
              <div className="email-box">
                <input type="text" 
                onChange={handleChange}
                name="email"
                value={userdata.email}/>
                <label>Email</label>
              </div>
              <div className="tittle-box">
                <input type="text" 
                className='Password'
                onChange={handleChange}
                name="tittle"
                value={userdata.tittle}/>
                <label>Tittle</label>
              </div>
              <div className="tittle-box">
                <input type="text" 
                className='Password'
                onChange={handleChange}
                name="tittle"
                value={userdata.tittle}/>
                <label>Tittle</label>
              </div>
              <div className="tittle-box">
                <input type="text" 
                className='Password'
                onChange={handleChange}
                name="tittle"
                value={userdata.tittle}/>
                <label>Tittle</label>
              </div>
              <div className="tittle-box">
                <input type="text" 
                className='Password'
                onChange={handleChange}
                name="tittle"
                value={userdata.tittle}/>
                <label>Tittle</label>
              </div>
              <button className='login-button'>Register</button>
              <div className="login-redirect">
                Don't Have an account?
                <Link to="/SignUp">SIGN UP</Link>                
              </div>
          </form>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import '../status/css/login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
});
const [errors, setErrors] = useState({});
// handle onChange for login inputs
const handleLoginChange = (e) => {
  e.preventDefault();
  setLogin({
      ...login,
      [e.target.name]: e.target.value
  })
}

 // Handle login form onSumbit
 const [emailNotFoundErr, setEmailNotFoundErr] = useState('');

 const loginHandler = (e) => {
  e.preventDefault();
  axios
  .post('http://localhost:8000/api/naceur/login', login ,{withCredentials: true,})
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          navigate('/admin/dash');
        })
         
      
      .catch((err) => {
     
        setEmailNotFoundErr(err.response.data.msg);
        const errResponse = err.response.data.errors;
        console.log(errResponse);
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
    
      });

}

  return (
    <div className='login'>
<div id="logo"> 
  <h1><i> Naceur Keraani</i></h1>
</div> 
<section className="stark-login">
  
  <form  onSubmit={loginHandler}>	
    <div id="fade-box">
    
      <input type="email" onChange={handleLoginChange} name="email" id="email" placeholder="Username" />
      <p style={{color: 'white', backgroundColor: 'lime'}}>{errors.email}</p>
          <p style={{color: 'white', backgroundColor: 'lime'}}>{emailNotFoundErr && emailNotFoundErr}</p>
        <input type="password" onChange={handleLoginChange}  placeholder="Password" name='password' />
        <p style={{color: 'white', backgroundColor: 'lime'}}>{errors.password}</p>
          <button type="submit">Log In</button> 
         
        </div>
      </form>
      <div className="hexagons">
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <br/>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <br/>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span> 
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            <span>&#x2B22;</span>
            
            <br/>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <span>&#x2B22;</span>
              <br/>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
                <span>&#x2B22;</span>
              </div>      
            </section> 
            
            <div id="circle1">
              <div id="inner-cirlce1">
                <h2> </h2>
              </div>
            </div>
            
            
            
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            
            
            
            



    </div>
  )
}

export default Login
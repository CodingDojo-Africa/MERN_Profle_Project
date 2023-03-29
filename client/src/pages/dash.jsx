import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Nav from '../components/adminDash/Nav'
import Main from '../components/adminDash/Main'

import axios from 'axios';
function Dash() {
 
  const [projects, setPirates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    
  
    axios
      .get('http://localhost:8000/api/projects' )
      .then((res) => {
        setPirates(res.data);
        // console.log(res.data.pirates);
        setIsLoading(false);
      })
      .catch((err) =>{
        setError(err.message);
      });
  }, []);

  const navigate = useNavigate();

  // DELETE FROM DOM
 

  // LOGOUT
  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }


  return (
    < >
    <Nav logoutHandler={logoutHandler}/>
    <Main/>
    </>
    
  )
}

export default Dash
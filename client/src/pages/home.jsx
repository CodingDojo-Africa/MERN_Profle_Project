
import Nav from '../components/nav'
import '../assets/css/styles.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/js/main'
import Heo from '../components/project/heo'
import Projects from '../components/project/projects'
import React,{useState,useEffect} from 'react'
import axios from 'axios'



function HomeP(props) {

  
  const [projects,setProjects]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/projects")
    .then(res=>{
      setProjects(res.data)
       
    })
    .catch(err=>console.log("err",err))
    
},[])




  return (
    <>
    <Nav/>
   <main className='mainProject'>
    
   <Heo/>
<Projects projects={projects}/>
   </main> 
   
    </>
  )
}

export default HomeP
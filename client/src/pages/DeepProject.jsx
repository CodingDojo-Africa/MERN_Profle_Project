import '../assets/css/styles.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/js/main'
import Heo from '../components/project/heo'
import Nav from '../components/nav'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import DeepP from '../components/project/DeepP'
const DeepProject = () => {
    const [isloading,setIsloading]=useState(true)
    const [projects,setProjects]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects")
        .then(res=>{
          setProjects(res.data)
            setIsloading(false)
        })
        .catch(err=>console.log("err",err))
        
    },[])
    if (isloading){
      return <h2>🧨🎇loading.....</h2>
    }
  return (
    <>
       <Nav/>
   <main className='mainProject'>
    
   <Heo/>
<DeepP projects={projects}/>
</main>
    </>
  )
}

export default DeepProject
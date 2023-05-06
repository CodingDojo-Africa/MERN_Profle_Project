import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/nav'
import OneProject from '../components/project/OneProject'
import { useParams } from 'react-router-dom';
function ShowOne() {
  const [project, setProject] = useState({
    title: '',
    catagorie: '',
    description: '',
    enverment: '',
    technologie: '',
    picturePath:'',
    video:''
  });
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('/api/projects/'+id)
    .then(res=>{console.log(res.data);
      setProject(res.data)
   
    })
    .catch(err=>console.log(err))
},[id,refresh])
  return (
    <div>
<Nav/>
<main>
  <OneProject project={project}/>
</main>
    </div>
  )
}

export default ShowOne
import React,{ useState }  from 'react'
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate,Link} from "react-router-dom";
import axios from "axios";



const Projects=({projects, setProjects, refresh, setRefresh})=> {
    
    
    const navigate=useNavigate();
    const [basicModal, setBasicModal] = useState(false);
    
  const toggleShow = () => setBasicModal(!basicModal);
    const deleteHandler = (id) => {
      setRefresh(!refresh)
        axios
          .delete(`http://localhost:8000/api/projects/${id}`)
          .then((res) => {
            console.log(res.data);
            console.log("delete sucess ✅");
            navigate("/admin/dash");
            setProjects(projects.filter((project) => project._id !== id));
           
          })
          .catch((err) => {
            console.log("❌❌", err);
          });
      };
      
     
  return (
     
    <div>
        
        <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>Title Project</th>
        <th scope='col'>Video</th>
        <th scope='col'>Categorie</th>
        <th scope='col'>Description</th>
        <th scope='col'>Environment</th>
        <th scope='col'>Technologie Used</th>
        <th scope='col'>Actions</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
    {projects.map(project =>{
        return <tr key={project._id} >
        <td>
          <div className='d-flex align-items-center'>
          
            <img
               src={project.picturePath}
              alt='imagePlllllll'
              style={{ width: '100px', height: '100px' }}
             
            />
            
            <div className='ms-3'>
             
              <p className='text-muted mb-0'>{project.title}</p>
            </div>
          </div>
        </td>
        <td>
        <div className='d-flex align-items-center'>
        <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${project.video}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
        
          </div>
        </td>
        
        <td>
        <div className='ms-3'>
          {project.catagorie}
          </div></td>
        <td>
       {project.description}
        </td>
        
        <td>
       {project.enverment}
        </td>
        <td>
       {project.technologie}
        </td>
        <td>
        <Link className="btn btn-info" to={`/update/${project._id}`}  onClick={toggleShow}>
Edit
</Link>
<button className="btn btn-danger" onClick={() => deleteHandler(project._id)} rounded size='sm'>
Delete
</button>
        </td>
      </tr>
    })}
    </MDBTableBody>
  </MDBTable> 
  <div/> <div/>
  </div>
  )
}

export default Projects
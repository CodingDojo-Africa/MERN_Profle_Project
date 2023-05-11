import React ,{useEffect,useState} from "react";
import { Route,Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/index";
import HomeP from "./pages/home";
import ShowOne from "./pages/showOne";

import Auth from "./pages/auth";

import MachineLearningProject from "./pages/MachineLearningProject";
import Dash from "./pages/dash";
import axios from 'axios';
import Update from "./components/adminDash/update";
import PrivateRoute from "./components/private/PrivateRoute";
import DataScience from "./pages/DataScience";
import DeepProject from "./pages/DeepProject";
import IndeusProjects from "./pages/IndustrialAutomationProject";

import Heo from "./components/heo";
import SkillsPage from "./components/paths/SkillsPage";
import QUALIFICATIONPage from "./components/paths/QUALIFICATIONPage";
import ServerPage from "./components/paths/ServerPage";
import ProjectPage from "./components/paths/ProjectPage";
import ContactPage from "./components/paths/ContactPage";
import AddProject from "./components/adminDash/AddProject";
function App() {
  // const [currentUser, setCurrentUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
     // console.log(`Token => ${localStorage.getItem('token')}`);
     axios
     .get('/api/naceur/', config)
     .then((res) => {
      //  setCurrentUser(res.data);
       // console.log('**** => ', res.data);
       setIsLoading(false);
       setRefresh(true)
     })
     .catch((err) => console.log('*** ==> ', err));
 }, [refresh]);



  return (
    <>
   
    <Routes>

      <Route path='/heo' element={<Heo/>} />
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/QUALIFICATION' element={<QUALIFICATIONPage/>} />
        <Route path='/Server' element={<ServerPage/>} />
        

        <Route path='/Project' element={<ProjectPage/>} />
        <Route path='/Contact' element={<ContactPage/>} />
       
      
      <Route path='/' element={<Home/>}/>
      <Route path='/project/ai' element={<HomeP/>}/>
      <Route path='/project/mlp' element={<MachineLearningProject/>}/>
      <Route path='/project/data' element={<DataScience/>}/>
      <Route path='/project/deep' element={<DeepProject/>}/>
      <Route path='/project/ind' element={<IndeusProjects/>}/>
      <Route path='/show/:id' element={<ShowOne/>}/>
      <Route  path='/admin' element={<Auth/>}  />
      <Route path="/admin/dash" element={ <PrivateRoute> <Dash isLoading={isLoading}
                  // refresh={refresh}
/></PrivateRoute>}/>
     <Route path="/update/:id" element={<Update /> } />
     <Route path="/add" element={<AddProject /> } />
     
     
    </Routes>
    
    </>

  );
}

export default App;
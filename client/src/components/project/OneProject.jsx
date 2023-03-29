import React,{useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import '../../status/css/button.css'
function OneProject({project}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  

  return (
    
  
  <section id="homeProject">
  <div id="banner-bg-effect" className="banner-effect"></div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
      <h2 className="mb-4"><strong style={{color: "#000"}}>{project.title}</strong> 
     </h2>


        <div className="mt-4">
        <div className="dotWrapper dotWrapper-1">
    <div className="dot dot-1"></div>
   < div className="box">
      <button className='button' onClick={toggleShow}>See Description <i className="ri-search-eye-line"></i></button> <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  </div>
        </div>
         
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 order-first">
        <div>
        { project.video ? (
  <div style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative' }}>
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
) : (<img src="/image/fraud-analytics2-800x600.png" alt=""/>)}

      
        </div>
      </div>
    </div>
  </div>
 
  <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>More inforamtion</MDBModalTitle>
              <MDBBtn classNameName='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody> <b>{project.title}</b>
              <br/>
            <p> About Dataset:<br/>
              Company Description<br/>
             {project.description}
<br/>Shareholders<br/>

Mutual fund holders 49.41%<br/>
Individual stakeholders 4.17%<br/>
Other institutional 31.86%<br/>

Contact Information<br/>

Netflix, Inc.<br/>
100 Winchester Circle<br/>
Los Gatos California 95032<br/>


P: (408) 540-3700<br/>
Investor Relations: (408) 809-5360<br/>
www.netflix.com<br/>

Source and Inspiration<br/>

The data is collected from Yahoo Finance. Inspiration is the release
of the fifth season of my favorite Netflix show Money Heist (La Casa
de Papel)</p> </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>       
</section>






  )
}

export default OneProject
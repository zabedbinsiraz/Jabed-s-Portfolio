import React from 'react';


const Project = (props) => {
    const project = props.project;
    return (
        <div className='col-md-3 ms-5 p-5 col-sm-6'>

        <div className="card p-2 m-1" style={{width:'20rem',height:'550px'}}>
        <div id="#c" className="carousel slide" data-bs-ride="carousel">

 <div className="carousel-inner">
   <div className="carousel-item active">
    <img src={project.img1} className="d-block w-100 h-100" alt=""/>
   </div>
   <div className="carousel-item">
   <img src={project.img2} className="d-block w-100 h-100" alt=""/>
   </div>
   <div className="carousel-item">
   <img src={project.img3} className="d-block w-100 h-100" alt=""/>
   </div>
 </div>

</div>
 <div className="card-body">
   <h5 className="card-title">{project.title}</h5>
   <p className="card-text ">{project.desc}</p>
 </div>
 <p>{project.tech}</p>
 <div className="card-body">
   <a href={project.liveLink} className="card-link">Live</a>
   <a href={project.codeLink} className="card-link">Code</a>
 </div>
</div>


       
         </div>
    );
};

export default Project;
import React from 'react';


const Project = (props) => {
    const project = props.project;
    return (
        <div className='col-md-3 p-2 m-2'>

        <div class="card p-2 m-1" style={{width:'20rem',height:'550px'}}>
        <div id="#c" class="carousel slide" data-bs-ride="carousel">

 <div class="carousel-inner">
   <div class="carousel-item active">
    <img src={project.img1} class="d-block w-100 h-100" alt=""/>
   </div>
   <div class="carousel-item">
   <img src={project.img2} class="d-block w-100 h-100" alt=""/>
   </div>
   <div class="carousel-item">
   <img src={project.img3} class="d-block w-100 h-100" alt=""/>
   </div>
 </div>

</div>
 <div class="card-body">
   <h5 class="card-title">{project.title}</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </div>
 <p>{project.tech}</p>
 <div class="card-body">
   <a href="#" class="card-link">{project.liveLink}</a>
   <a href="#" class="card-link">{project.codeLink}</a>
 </div>
</div>


       
         </div>
    );
};

export default Project;
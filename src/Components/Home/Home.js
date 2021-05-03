
import React from 'react';
import portImg from '../../images/jabed-pro.jpg';



const Home = () => {
    
    
    return (
      <div>
            <div  style={{backgroundColor:'darkolivegreen',height:'100vh'}} className="row p-3 d-flex flex-wrap justify-content-center align-items-centers">
            <div style={{height:'400px'}} className="col-md-5 offset-2 pt-5 ">
                <h1 className="text-white" >MOHAMMAD<br/> JABED HOSSAIN </h1>
                <h3>Web App Developer</h3><br/>
                <p>By day I design GitLab, an open-core DevOps platform. By night I do digital illustration. Creative expression is what lights me up, and I'm always open to learning about new opportunities.</p>
               <br/>
                <a className="btn btn-danger" href="https://drive.google.com/uc?export=download&amp;id=1xAGXJkE02PKhn9-7OYwKrKUYoSL84Icm" role="button">download resume</a>
            </div>
            <div  style={{height:'400px'}} className="col-md-5 ">
                   <img  style={{borderRadius:'50%',border:'2px solid white'}} src={portImg} alt=""/>
            </div>
        
          
        </div>
        
      </div>
    );
};

export default Home;
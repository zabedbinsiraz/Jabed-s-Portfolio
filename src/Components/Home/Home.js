
import React from 'react';
import portImg from '../../images/jabed-pro.jpg';
import '../Resume/Resume.css';



const Home = () => {
    
    
    return (
      <div>
            <div style={{backgroundColor:'darkolivegreen',height:'100%',marginTop:'7%',marginBottom:'7%'}} className=" row p-3 d-flex flex-wrap justify-content-center align-items-centers">
            <div style={{height:'420px'}} className="col-md-5 col-sm-12 offset-2 pt-5 p-5 ">
                <h1 className="text-white" >MOHAMMAD<br/> JABED HOSSAIN </h1>
                <h3> Web App Developer</h3><br/>
                <p>I am a dedicated web app developer and determined to deliver very highest quality. I take great pride in my work and I always try to better myself with every project I work on.</p>
               <br/>
                <a className="btn btn-success" href="https://drive.google.com/uc?export=download&amp;id=1xAGXJkE02PKhn9-7OYwKrKUYoSL84Icm" role="button">download resume</a>
                
            </div>
            <div  style={{height:'400px'}} className="col-md-5 col-sm-12 text-center">
                   <img  style={{borderRadius:'50%',border:'2px solid white'}} src={portImg} alt=""/>
            </div>
        
          
        </div>
       
        <footer className="bottom-container row d-flex">

<div className="col-md-3 pt-2 ms-0">
<a href="https://www.linkedin.com/in/mohammad-jabed-hossain-913b14198/">LinkedIn</a>
<a href="https://www.facebook.com/zabedbinsiraz" target="blank">Facebook</a>

<a href=" https://github.com/zabedbinsiraz" target="blank">GitHub</a>  
  </div>         
<div className="col-md-8 pb-1">
<p>Copyright &copy; Mohammad Jabed Hossain 2021</p>
</div>

</footer>
       
       
        
      </div>
    );
};

export default Home;
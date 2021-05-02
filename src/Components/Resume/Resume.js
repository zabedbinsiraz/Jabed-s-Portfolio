import React from 'react';
import jabed from '../../images/jabed-pro.jpg';
import './Resume.css';

const Resume = () => {
    return (
       <div>


<div className="m-3 p-3 text-center">
           <h1 className="text-white">Professional Resume</h1>
           <a class="btn btn-success " href="https://drive.google.com/uc?export=download&amp;id=1xAGXJkE02PKhn9-7OYwKrKUYoSL84Icm" role="button">download</a>
           </div>
            <div id="container" className=" p-5">

       
<header> 
    <img class="profile-image" src={jabed} alt="jabed_hasan"/>

    <div class="header-bio">
        <h2>Mohammad Jabed Hossain</h2>
        <h4>Web App Developer</h4>
    </div>

   <div class="header-contact">
        <p>&#128231; <a href="mailto:hossainjabed3@gmail.com" target="blank">hossainjabed3@gmail.com </a></p>
        <p>&#127760; <a href="https://www.github.com/zabedbinsiraz" target="blank">my github profile here</a></p>
        <p>&#128222; <a href="tel:+8801728985188" target="blank">+880 1728985188</a></p>
   </div>

</header>


<div class="clear-div"></div>
<hr/>



<main>

    
    <section id="personal-information">
        <div class="content">
            <div class="left-div">
                <h3>    CAREER OBJECTIVE</h3>
            </div>
            <div class="right-div">
                <p>
                I am a dedicated front-end web developer. Always love to solve any type of web related problems and also love to learn any type of upcoming or old technology that’s related to web development. Now I am completely determined to reach myself as a pro web developer.
                
                </p>
            </div>
        </div>
    </section>
  



    <div class="clear-div"></div>
    <hr class="common-hr"/>
    <section id="personal-information">
        <div class="content">
            <div class="left-div">
                <h3>DEVELOPING SKILLS</h3>
            </div>
            <div class="right-div">
                <p>
                    <strong>Comfortable:</strong>  JavaScript, ES6, React, Redux, React Router, Next.js, HTML, CSS, SASS, Bootstrap <br/>
                    <strong>Familiar:</strong> TypeScript, GraphQL, Node.js, Express.js, MongoDB, Mongoose, Material-UI, React- Bootstrap, React Native, Wordpress, OOP, Python <br/>
                    <strong>Tools:</strong> Git, VS Code, Chrome Dev Tools, Heroku, Netlify, FirebaseGit, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase <br/>
                   
                
                </p>
            </div>
        </div>
    </section>
  



    <div class="clear-div"></div>
    <hr class="common-hr"/>


  
    <section id="Work-Experience">
        <div class="content">
            <div class="left-div">
                <h3>MY PROJECTS</h3>
            </div>
            <div class="right-div">
               


                <h4> <a href="https://plumbing-hero.web.app/" target="blank">Plumbing-Hero</a></h4> 
                
                

                <ul>
                    <li>Dynamic & responsive website with stripe payment gateway.</li>
                    <li>Separate dashboard for users and admin panels.</li>
                    <li>	Technology: React, NodeJS, MongoDB, Express, Material-UI, Firebase, Heroku</li>
                
                </ul>

                <a href="https://github.com/zabedbinsiraz/plumbing-hero-server" target="blank">server-site-code</a><br/>
                <a href="https://github.com/zabedbinsiraz/plumbing-hero" target="blank">client-site-code</a><br/>
                <hr class="common-hr"/>

                <h4> <a href="https://tshirt-shop1.web.app/" target="blank">T-Shirt Tray</a></h4> 
                
                

                <ul>
                    <li>	Dynamic & responsive website for e-commerce purpose.</li>
                    <li>	Admin can add products and show it in the homepage dynamically. User can order any product dynamically.</li>
                    <li>	Technology: React, NodeJS, MongoDB, Express, Material-UI, Firebase, Heroku</li>
                
                </ul>

                <a href="https://github.com/zabedbinsiraz/T-shirt-tray-server" target="blank">server-site-code</a><br/>
                <a href="https://github.com/zabedbinsiraz/T-shirt-tray-client" target="blank">client-site-code</a><br/>
                <hr class="common-hr"/>

                <h4> <a href="http://reactauth-login.web.app/" target="blank">Regular Driver</a></h4> 
                
                

                <ul>
                    <li>	Rider service website responsive for mobile & desktop.</li>
                    <li>	User can search the destination to see here the available riders.</li>
                    <li>	Technology: Firebase authentication, React.js, CSS3, material-UI, fontawesome.</li>
                
                </ul>

                <a href="https://github.com/zabedbinsiraz/Regular-Driver" target="blank">source-code</a><br/>
               
                <hr class="common-hr"/>

            </div>
        </div>
    </section>
 

    <div class="clear-div"></div>
    <hr class="common-hr"/>


    
    <section id="communication-skills">
        <div class="content">
            <div class="left-div">
                <h3>EDUCATION</h3>
            </div>
            <div class="right-div">
               
              <p><strong>National University Bangladesh - BSc in Mathematics - (appeared)</strong></p>                      
                
            </div>
        </div>
    </section>

   

    <div class="clear-div"></div>
    <hr class="common-hr"/>


    
   
  

   
    <section id="ielts-section">
        <div class="content">
            <div class="left-div">
                <h3>DECLARATION</h3>
            </div>
            <div class="right-div">
                <p>I hereby declare that the information above is true to the best of my knowledge.</p>                 
                
            </div>
        </div>
    </section>

   

    <div class="clear-div"></div>
    <hr class="common-hr"/>



</main>



<div class="clear-div"></div>
   


<footer class="bottom-container">

    <a href="#container">Home</a>
    <a href="https://www.facebook.com/zabedbinsiraz" target="blank">Facebook</a>
   
    <a href=" https://github.com/zabedbinsiraz" target="blank">GitHub</a>           
    <p>Copyright &copy; Mohammad Jabed Hossain 2021</p>

</footer>



</div>  
       </div>     
    );
};

export default Resume;
import React from 'react';
import home from '../../images/home-plumbing.png';
import service from '../../images/service-plumbing.png';
import review from '../../images/review-plumbing.png';
import t1 from '../../images/t1.png';
import t2 from '../../images/t2.png';
import t3 from '../../images/t3.png';
import r1 from '../../images/r1.png';
import r2 from '../../images/r2.png';
import r3 from '../../images/r3.png';
import Project from './Project';
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c3 from '../../images/c3.png';
import f1 from '../../images/f1.png';
import f2 from '../../images/f2.png';
import f3 from '../../images/f3.png';

const projects = [
    {
    title:'Plumbing-Hero',
    img1: home,
    img2: service ,
    img3: review,
    tech: 'React, Node, MongoDB',
    liveLink: 'https://plumbing-hero.web.app/ ',
    codeLink: 'https://github.com/zabedbinsiraz/plumbing-hero'
},
    {
    title:'T-Shirt Tray',
    img1: t1,
    img2: t2 ,
    img3: t3,
    tech: 'React, Node, MongoDB',
    liveLink: 'https://tshirt-shop1.web.app/ ',
    codeLink: 'https://github.com/zabedbinsiraz/T-shirt-tray-client'
},
    {
    title:'Football-Club Expounder',
    img1:f1,
    img2: f2 ,
    img3: f3,
    tech: 'React, Node, MongoDB',
    liveLink: 'https://lucid-murdock-90abf4.netlify.app/ ',
    codeLink: 'https://github.com/zabedbinsiraz/Football-Club-Expounder'
},
    {
    title:'Regular Driver',
    img1:r1,
    img2: r2 ,
    img3: r3,
    tech: 'React, Node, MongoDB',
    liveLink: 'http://reactauth-login.web.app/ ',
    codeLink: 'https://github.com/zabedbinsiraz/Regular-Driver'
},
    {
    title:'Player-Selection App',
    img1:c1,
    img2: c2 ,
    img3: c3,
    tech: 'React, Node, MongoDB',
    liveLink: 'https://cranky-varahamihira-58f66b.netlify.app/ ',
    codeLink: 'https://github.com/zabedbinsiraz/Player-Selection-App'
}
]

const Projects = () => {
    return (
        <div>
           
         <div className="row  d-flex flex-wrap justify-content-center">

         <div className="m-3 p-3 text-center">
           <h1 className="text-white">All Projects</h1>
           </div>
             
             {
                 projects.map(project => <Project key={project.img1} project={project}></Project>)
             }
         </div>
            
        </div>
    );
};

export default Projects;



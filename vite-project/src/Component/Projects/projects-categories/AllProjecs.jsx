import React from 'react';
import deburguerProjectImg from '../../../Assets/Image/ImgProjects/Deburguer-shop.png';
import brasilexpressProjectImg from '../../../Assets/Image/ImgProjects/brasilexpress.png';
import ecommerceProjectImg from '../../../Assets/Image/ImgProjects/e-commerce.png';
import dashboardProjectImg from '../../../Assets/Image/ImgProjects/Dashboard.png';
import lesconeProjectImg from '../../../Assets/Image/ImgProjects/le-scone.png';
import weatherNowProjectImg from '../../../Assets/Image/ImgProjects/Clima-agora.png';
import './all-style.css'

const projects = [
  {
    name: "Clima agora",
    img: weatherNowProjectImg
  },
  {
    name: "Le Scone",
    img: lesconeProjectImg
  },
  {
    name: "Dashboard Power BI",
    img: dashboardProjectImg
  },
  {
    name: "Ecommerce",
    img: ecommerceProjectImg
  },
  {
    name: "Brasil Express",
    img: brasilexpressProjectImg
  },
  {
    name: "Deburguer Shop",
    img: deburguerProjectImg
  },
];

function AllProjects() {
    return (
        <div className='img-projects'>
          {
            projects.map(project => (
              <img key={project.name} src={project.img} alt={project.name} />
            ))
          }
        </div>
    );
}

export default AllProjects;

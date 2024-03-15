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
    link: "https://previsao-do-temp.netlify.app/",
    name: "Clima agora",
    img: weatherNowProjectImg
  },
  {
    link: "https://le-scone-gourmet.netlify.app/",
    name: "Le Scone",
    img: lesconeProjectImg
  },
  {
    link: "https://app.powerbi.com/view?r=eyJrIjoiYTJmOWMyNGUtYzU4Mi00NGNkLWJmYmYtOGFjMDY0MjVjZmI5IiwidCI6ImIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCJ9",
    name: "Dashboard Power BI",
    img: dashboardProjectImg
  },
  {
    link: "https://65af1bb012f1c381d79ac15e--e-commercetestproject.netlify.app/",
    name: "Ecommerce",
    img: ecommerceProjectImg
  },
  {
    link: "https://brazilexpress.netlify.app/",
    name: "Brasil Express",
    img: brasilexpressProjectImg
  },
  {
    link: "https://deburguer-shop.netlify.app/",
    name: "Deburguer Shop",
    img: deburguerProjectImg
  },
];

function AllProjects() {
    return (
        <div className='img-projects'>
          {
          projects.map(project => (
              <a href={project.link} target="_blank">
                <img  width="100%" key={project.name} src={project.img} alt={project.name} />
              </a>
            ))
          }
        </div>
    );
}

export default AllProjects;

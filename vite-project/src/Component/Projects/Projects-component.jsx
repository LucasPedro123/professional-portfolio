import React, { useState } from 'react';
import './Projects-style.css';
import DataAnalytics from './projects-categories/DataAnalytics';
import MyApps from './projects-categories/MyApp';
import Others from './projects-categories/Others';
import AllProjecs from './projects-categories/AllProjecs';

// Adicionando a lista de elementos quando estado ser ativado
const elements = [
    {
        label: 'Todos',
        element: <AllProjecs/>
    },
    {
        label: 'Web App',
        element: <MyApps/>
    },
    {
        label: 'DataAnalysis',
        element: <DataAnalytics/>
    },
    {
        label: 'Outros',
        element: <Others/>
    },
];

function Projects() {
    //
    const [elementActive, setElementActive] = useState(elements[0].element); // serve para navegar entre elementos
    const [activeButton, setActiveButton] = useState(elements[0].label); // Estado para acompanhar, através da label, qual botão está ativo - serve para definir background

    return (
        <section className='section-projects'>
            <div className='section-projects-content'>
                <div className='section-project-texts' data-aos="fade-right"  data-aos-duration="500">
                    <h1 className='section-project-title'><span>Meu</span><br /> Portfólio</h1>
                    <p className='section-project-subtitle'>Estes são alguns dos trabalhos e <br/>  projetos que já realizei</p>
                </div>
                <div className='section-projects-btn' data-aos="zoom-in">
                    {elements.map(e => (
                        <button
                            className={`projects-btn ${activeButton === e.label ? 'active' : ''}`} // Adicionando classe 'active' se o botão estiver ativo
                            type='button'
                            key={e.label} // chave do elemento
                            onClick={() => {
                                setElementActive(e.element); // Ele vai redenrizar o elemento clicado
                                setActiveButton(e.label); // Atualizar o estado do botão ativo quando clicado
                            }}
                        >
                            {e.label}
                        </button>
                    ))}
                </div >
                {/* Aqui é onde aparece os elementos */}
                <article className='projects-images' data-aos="zoom-in">
                    {elementActive}
                </article>
            </div>
        </section>
    );
}

export default Projects;

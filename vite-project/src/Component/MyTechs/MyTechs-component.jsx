import React from 'react';
import './MyTechs-styles.css';



function MyTechs() {

    return (
        <section className='section-mytechs'>
            <div className='mytech-content'>
                <h1 className='mytechs-title'><span>Minhas</span> Techs</h1>
                <p>Tecnologias</p>
                <h2 className='mytechs-subtitle'>Já <span>utilizadas</span></h2>
                
                <div className='mytechs-icons'>
                    <i class="fa-brands fa-python fa-6x"></i>
                    <i className='iconColorBlack' class="fa-brands fa-node-js fa-6x"></i>
                    <i class="fa-6x"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673m5.403 2.914v3.087a.77.77 0 0 0 .772.772a.773.773 0 0 0 .772-.772a.773.773 0 0 1 1.317-.546a.775.775 0 0 1 .226.546a2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545a.767.767 0 0 1-1.091 0a.77.77 0 0 1-.226-.545a.77.77 0 0 0-.772-.772a.771.771 0 0 0-.772.772m12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546a.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546a.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772m-3.088-2.315h-1.544v1.543h1.544z"/></svg></i>
                </div>
            </div>

            <div className='mytechs-wrapper'>
                <p>Tecnologias</p>
                <h2 className='mytechs-subtitle'>Atualmente <span>Desenvolvendo</span></h2>
                <div className='mytechs-icons2'>
                    <i class="fab fa-html5 fa-6x"></i>
                    <i class="fa-brands fa-css3-alt fa-6x"></i>
                    <i class="fa-brands fa-js fa-6x"></i>
                    <i className='icon4' class="fa-brands fa-react fa-6x"></i>
                </div>
            </div>
        </section>
    );
}

export default MyTechs;

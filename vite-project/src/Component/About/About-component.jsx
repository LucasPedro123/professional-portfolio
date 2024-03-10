import aboutImage from '../../Assets/Image/my-photo-about.svg';
import './About-style.css'

function About() {

    return (
      <section className='section-about'>
            <div className='about-content'>
                <img src={aboutImage} alt="" />

                <h1 className='about-title'>Matheus <span>Campos</span></h1>
                <p className='about-text'>
                    My name is Matheus Amauri de Jesus Campos 👋
                    I'm from Brazil, São José dos Campos/SP. <br/>
                    Studying, 4th period, Systems Analysis and
                    Development at the Fatec - São José dos Campos.
                </p>

            </div>
            <div className='about-content-skills'>
                <h1 className='about-title-skills'><span>Hard</span> Skills</h1>

                <ul className='about-skills'>
                    <li className='about-skill'>
                        <p>Node.js</p>
                         <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>React.js</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>HTML</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>CSS</p>
                        <div>
                        <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>JavaScript</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>C#</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>SQL Server</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                    <li className='about-skill'>
                        <p>Mongo DB</p>
                        <div>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-solid fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                            <i class="fa-light fa-hexagon fa-2x"></i>
                        </div>
                    </li>
                </ul>
            </div>
      </section>
    )
  }
  
export default About;
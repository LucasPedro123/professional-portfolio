import './Experience-style.css';

function Experience() {

    return (
        <footer className="footer">
            <div className="footer-texts" >
                <div>
                    <p data-aos="fade-up" data-aos-duration="900">
                        Minha jornada está apenas<br/> começando, sempre aprendendo
                    </p>
                </div>
                <h1 data-aos="fade-up" data-aos-duration="1500" className="footer-title">Experiência <br/><span>Profissional</span></h1>
            </div>
            <div className="experience-content">
                <div className="experience-box" data-aos="zoom-in" data-aos-duration="1300"> 
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="experience-box" data-aos="zoom-in" data-aos-duration="1900">
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="experience-box" data-aos="zoom-in" data-aos-duration="2800">
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div className="footer-phrase" data-aos="fade-up">
                <i class="fa-solid fa-quote-right fa-5x"></i>
                <h3 className="phrase-title" >“<span>Aprender</span>  é a unica coisa <span>que a mente não se</span> <br/><span>cansa</span> , nunca tem medo e nunca se arrepende”</h3>
                <h2 className="phrase-author">~Leonardo da Vinci</h2>
            </div>
        </footer>
    )
  }
  
export default Experience;
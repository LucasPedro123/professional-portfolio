import './Experience-style.css';

function Experience() {

    return (
        <footer className="footer">
            <div className="footer-texts">
                <div>
                    <p>
                        Minha jornada está apenas<br/> começando, sempre aprendendo
                    </p>
                </div>
                <h1 className="footer-title">Experiência <br/><span>Profissional</span></h1>
            </div>
            <div className="experience-content">
                <div className="experience-box">
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="experience-box">
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="experience-box">
                    <h2 className="experience-title">Cargo</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div className="footer-phrase">
                <i class="fa-solid fa-quote-right fa-5x"></i>
                <h3 className="phrase-title">“<span>Aprender</span>  é a unica coisa <span>que a mente não se</span> <br/><span>cansa</span> , nunca tem medo e nunca se arrepende”</h3>
                <h2 className="phrase-author">~Leonardo da Vinci</h2>
            </div>
        </footer>
    )
  }
  
export default Experience;
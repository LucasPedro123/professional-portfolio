import './Main-style.css'
import mainImage from '../../Assets/Image/main-image.svg';


function Main() {

    return (
      <main className='main-container'>
            <article className='main-content'>
                <div className='main-wrapper' >
                    <div className='main-texts' data-aos="fade-right" data-aos-duration="1000">
                        <div className='main-titles'>
                            <p className='main-title-p'>Olá pessoas, <br /></p>
                            <h1 className='main-title'>EU SOU UM <br /> PROGRAMADOR</h1>
                            <p className='main-title-p'>Seja bem-vindo ao meu portifólio website<br /></p>
                        </div>

                        <button className='main-btn'>
                            Saiba mais sobre mim
                        </button>

                        <div className='main-icons'>
                            <a href="https://github.com/LucasPedro123">
                                <i  class="fa-brands fa-github fa-3x"></i>

                            </a>
                            <a href="https://www.linkedin.com/in/lucas-pedro-fernandes/">
                                <i class="fa-brands fa-linkedin-in fa-3x"></i>  
                            </a>
                            <a href="https://www.instagram.com/lucasfernandes4150/">
                                <i class="fa-brands fa-instagram fa-3x"></i>  
                            </a>
                        </div>
                    </div>
                    <div
                        className='main-image'
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        <img src={mainImage}  alt="imagem de um desenho" />
                    </div>
                </div>
            </article>
      </main>
    )
  }
  
export default Main;
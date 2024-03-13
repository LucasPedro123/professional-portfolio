import './Main-style.css'
import mainImage from '../../Assets/Image/main-image.svg';


function Main() {

    return (
      <main className='main-container'>
            <article className='main-content'>
                <div className='main-wrapper'>
                    <div className='main-texts'>
                        <p className='main-title-p'>Olá pessoas, </p>
                        <h1 className='main-title'>EU SOU UM <br /> PROGRAMADOR</h1>
                        <p className='main-title-p'>Seja bem-vindo ao meu portifólio website</p>

                        <button className='main-btn'>
                            Saiba mais sobre mim
                        </button>

                        <div className='main-icons'>
                            <a href="">
                                <i  class="fa-brands fa-github fa-3x"></i>

                            </a>
                            <a href="">
                                <i class="fa-brands fa-linkedin-in fa-3x"></i>  
                            </a>
                            <a href="">
                                <i class="fa-brands fa-instagram fa-4x"></i>  
                            </a>
                        </div>
                    </div>
                    <div className='main-image'>
                        <img src={mainImage}  alt="imagem de um desenho" />
                    </div>
                </div>
            </article>
      </main>
    )
  }
  
export default Main;
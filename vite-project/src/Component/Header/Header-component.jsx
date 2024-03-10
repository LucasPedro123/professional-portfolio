import './Header-style.css'

function Header() {

    return (
      <header className='header-container'>
            <div className='header-content'>
                <i className='icon' class="fa-solid fa-rectangle-code fa-3x"></i>
                <h1 className='header-title'>Matheus Campos</h1>
            </div>
            <nav className='header-navigate'>
                <ul className='navigate-items'>
                    <li className='navigate-item'>
                        <a href="">Home</a>
                    </li>
                    <li className='navigate-item'>
                        <a href="">Sobre</a>
                    </li>
                    <li className='navigate-item'>
                        <a href="">Portfólio</a>
                    </li>
                    <li className='navigate-item'>
                        <a href="">Serviços</a>
                    </li>
                    <li className='navigate-item'>
                        <a href="">Resumo</a>
                    </li>
                    <li className='navigate-item'>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
  }
  
export default Header;
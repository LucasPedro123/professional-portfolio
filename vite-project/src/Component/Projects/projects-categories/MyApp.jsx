import deburguerProjectImg from '../../../Assets/Image/ImgProjects/Deburguer-shop.png';
import brasilexpressProjectImg from '../../../Assets/Image/ImgProjects/brasilexpress.png';
import ecommerceProjectImg from '../../../Assets/Image/ImgProjects/e-commerce.png';
import barberShop from '../../../Assets/Image/ImgProjects/barber-shop.png';
import weatherNowProjectImg from '../../../Assets/Image/ImgProjects/Clima-agora.png';
import lesconeProjectImg from '../../../Assets/Image/ImgProjects/le-scone.png';
import './all-style.css'


function MyApps() {

    return (
        <div className='img-projects'>
            <img src={ barberShop } alt="" />
            <img src={ deburguerProjectImg } alt="" />
            <img src={ lesconeProjectImg } alt="" />
            <img src={ brasilexpressProjectImg } alt="" />
            <img src={ ecommerceProjectImg } alt="" />
            <img src={ weatherNowProjectImg } alt="" />
            
        </div>
    )
  }
  
export default MyApps;
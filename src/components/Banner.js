import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (<div className='tjh-banner'>        
        <img src={logo} alt='The jungle house' className='tjh-logo' />
        <h1>The jungle house</h1>
        </div>);
}

export default Banner
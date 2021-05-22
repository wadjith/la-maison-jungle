import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
    const text = "La maison jungle";
    return (
    <div className = 'lmj-banner'>
        <img src = {logo} alt = 'la maison jungle' className = 'lmj-logo' />
        <h1>{text.toUpperCase()}</h1>
    </div>
    );
}

export default Banner;
import emailIcon from './assets/email.svg';
import instagramIcon from './assets/instagram.svg';
function Footer() {
    return (
        <div className="footer">
            <a href="mailto:emtmanmiclaine@gmail.com" target="_blank" className='footer-email'>
                <img src={emailIcon}></img>
                <span>emtmanmiclaine@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/madebymiclaine" target="_blank" className='footer-instagram'>
                <img src={instagramIcon}></img>
                <span>madebymiclaine</span>
            </a>
        </div >
    )
}
export default Footer
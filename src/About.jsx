import portrait from './assets/portrait.jpg';
import downloadIcon from './assets/download.svg';
import emailIcon from './assets/email.svg';
import instagramIcon from './assets/instagram.svg';
import resume from './assets/Emtman_Resume.pdf';
import aboutMe1 from './assets/about-me1.jpg';
import aboutMe2 from './assets/about-me2.jpg';
import aboutMe3 from './assets/about-me3.jpg';

function About() {
    return (
        <div className='about-page-container'>
            <div className="about-info">
                <div className="about-name">
                    <h1>MICLAINE</h1>
                    <h1>ELISE</h1>
                    <h1>EMTMAN</h1>
                </div>
                <div className="about-school">
                    <p> B.S. Electrical Engineering</p>
                    <p> California Polytechnic State University,</p>
                    <p> San Luis Obispo, CA</p>
                </div>
                <div className="about-links">
                    <a href='mailto:emtmanmiclaine@gmail.com'>
                        <img src={emailIcon}></img>
                        <span>emtmanmiclaine@gmail.com</span>
                    </a>
                    <a href='instagram.com/madebymiclaine'>
                        <img src={instagramIcon}></img>
                        <span>madebymiclaine</span>
                    </a>
                    <a href={resume}>
                        <img src={downloadIcon}></img>
                        <span>Download My Resume</span>
                    </a>
                </div>
            </div>

            <img className="portrait" src={portrait}></img>
            <div className="about-me-container">
                <h1>A little bit about me..</h1>
                <p>I love to create. Since I was young, I was the girl staying in from recess because I couldn't put down the paint brush. Over time, this desire to create found many different mediums- photography, sewing, woodworking, and finally engineering. </p>
                <p>I got my degree in Electrical Engineering in 2020 and was hired on as an engineer at SpaceX, where I worked on the Falcon rocket, supporting launches, and later developed and troubleshooted PCBA’s for the Starlink program. </p>
                <p>In 2023 I transitioned into software development and UI/UX design. Checkout my <a href="miclaine.com/software">portfolio.</a></p>
            </div>
            <div className="about-images">
                <img src={aboutMe1}></img>
                <img src={aboutMe2}></img>
                <img src={aboutMe3}></img>
            </div>
        </div>
    )
}
export default About
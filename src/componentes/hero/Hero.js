import './Hero.scss';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';

function Hero({ hero }) {
    return (
        <section className='Hero'>
            <div className='Hero__image' 
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
            >
                <img src={hero.url} alt={hero.alt}/>
            </div>
            <div className='Hero__info' 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >                
                <h1 className='Hero__title'>{hero.name}</h1>
                <h2 className='Hero__title'><SchoolIcon fontSize="medium"/> {hero.profession}</h2>
                <ul>
                    <li>
                        {/* <span className='Hero__icon'>📧</span> */}
                        <a href={`mailto:${hero.email}`} className="Hero__link">
                            <ContactMailIcon fontSize="large" />
                        </a>
                        <a href={hero.github} target="_blank" className="Hero__link">
                            <GitHubIcon fontSize="large" />
                        </a>
                        <a href={hero.web} target="_blank" className='Hero__link'>
                        <WebIcon fontSize="large"/>
                    </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';

function Footer({ footer }) {
    return (
        <section className='Footer'
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >
            <div className='Info'>
                <span className='Info__create'>CreatedBy: {footer.create} 👨‍🎓</span>
                <span className='Info__info'>{footer.info}</span>
            </div>
            <div className='Footer'>
                <div className='Footer__linked'>
                    <a href={footer.linkedin} target="_blank" className='Footer__link'>
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a href={footer.web} target="_blank" className='Footer__link'>
                        <WebIcon fontSize="large"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
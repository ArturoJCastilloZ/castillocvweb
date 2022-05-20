import './Portfolio.scss';
import Work from './Work';
import aos from 'aos';

function Portfolio({ portfolio }) {
    aos.init();
    return (
        <section className='Portfolio'
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >
            <h2 className='Portfolio__title'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
            >Portfolio</h2>
            <div className='Portfolio__wrap' 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            >
                {portfolio.map((work, index) => <Work key={work.alt + index} work={work}/> )}
            </div>
        </section>
    )
}

export default Portfolio;
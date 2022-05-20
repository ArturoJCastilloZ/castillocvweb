import { useState } from 'react';
import './Curriculum.scss';
import Descriptions from './Descriptions';

function Curriculum({ curriculumSection }) {
    const { experience, education } = curriculumSection;
    const [showExperience, setShowExperience] = useState(false);

    return (
        <section className='Curriculum'
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >
            <h2 className='Curriculum__title'
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
            >Resume</h2>
            <nav
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" 
            >
                <button onClick={() => setShowExperience(false)} className="Curriculum__btn">
                    <span className='Curriculum__content'>Education</span>
                </button>
                <button onClick={() => setShowExperience(true)} className="Curriculum__btn">
                    <span className='Curriculum__content'>Experience</span>
                </button>
            </nav>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" 
            >                
                {showExperience 
                    ? <Descriptions descriptions={experience} />
                    : <Descriptions descriptions={education} />
                }
            </div>
        </section>
    )
}

export default Curriculum;
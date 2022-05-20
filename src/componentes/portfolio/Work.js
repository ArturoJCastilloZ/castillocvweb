import './Work.scss';

function Work({ work }) {
    return (
        <article className='Work'>
            <a href={work.site} className='Work' target="_blank" rel="noreferrer">
                <img src={work.url} alt={work.alt} />
            </a>
            <div className='Work__description'>
                <span>{work.description}</span>
            </div>
        </article>
    )
}

export default Work;
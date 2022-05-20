import './Descriptions.scss';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusinessIcon from '@mui/icons-material/Business';

function Descriptions({ descriptions }) {
    return (
        <div className='Descriptions'>
            {descriptions.map((description, index) => {
                return (
                    <article className='Descriptions__item' key={description.title + index}>
                        <h3 className='Descriptions__title'>{description.title}</h3>
                        <p className='Descriptions__intitution'><BusinessIcon fontSize="medium"/> {description.institution}</p>
                        <span className='Description__year'><DateRangeIcon  fontSize="medium"/> {description.year}</span>
                        <p className='Descriptions__text'>{description.description}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default Descriptions;
import style from './Card.module.css'
import { Link } from 'react-router-dom'

const CardDestinos = ({ img, title, message }) => {
  return (
        <div id={style.Card}>
            <div id={style.container}>
                <div id={style.image_container}>
                    <div>
                        <img src={img} alt={title} title={title}/>
                    </div>
                </div>
                <div id={style.infoContainer}>
                    <div id={style.titleCard}>
                        <h1 title={title}>{title}</h1>
                    </div>
                    <div id={style.description}>
                        <div>
                            <p title={message}>
                                {message}
                            </p>
                        </div>
                    </div>
                    <div id={style.buttonMore}>
                        <Link to={'/peregrinacion'}>
                            <button>Leer más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardDestinos

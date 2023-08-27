import { useSelector } from 'react-redux'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { country } = useSelector(e => e)

  return (
        <div>
            <div>
            <footer className={style.footer}>
    <div className={style.waves}>
      <div className={style.wave} id={style.wave1}></div>
      <div className={style.wave} id={style.wave2}></div>
      <div className={style.wave} id={style.wave3}></div>
      <div className={style.wave} id={style.wave4}></div>
    </div>
    <ul className={style.menu}>
      <li className={style.menu__item}><Link to={'/'} className={style.menu__link} href="#">Inicio</Link></li>
      <li className={style.menu__item}><Link to={'/peregrinacion'} className={style.menu__link} href="#">Peregrinación</Link></li>
      <li className={style.menu__item}><Link to={'/contactanos'} className={style.menu__link} href="#">Contáctanos</Link></li>
    </ul>
    <p>&copy;2023 Provincia san Juán Bautista {country === 'PE' ? 'del Perú ' : undefined}| Todos los derechos reservados</p>
  </footer>
            </div>
        </div>
  )
}

export default Footer

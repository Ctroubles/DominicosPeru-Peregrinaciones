import style from './Header.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

import FlotingBubbles from '../../componets/FloatingBubbles/FloatingBubbles'
import logo from '../../assets/logos/white_church_logo.png'
import { useDispatch, useSelector } from 'react-redux'
import setCountry from '../../redux/actions/actions'
import { useState, useEffect, useRef } from 'react'

import peruFlag from '../../assets/flags/Flag_of_Peru.png'
import ecuadorFlag from '../../assets/flags/Flag_of_Ecuador.png'
import arroIcon from '../../assets/icons/triangle_icon.png'
import moonIcon from '../../assets/icons/moon.png'
import sunIcon from '../../assets/icons/sun.png'
import { deleteThemeColor, setThemeColor } from '../../utils'

const Header = () => {
  const { country } = useSelector(e => e)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const [THEME, SET_THEME] = useState()
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [open, setOPen] = useState(false)
  const [popCountry, setPopCountry] = useState(false)

  const path = location.pathname

  const openRef = useRef(open)

  useEffect(() => {
    openRef.current = open
  }, [open])

  useEffect(() => {
    const root = document.documentElement

    const observer = new MutationObserver((mutationsList, observer) => {
      // Verifica si hubo cambios en el atributo 'data-theme'
      const themeAttributeChanged = mutationsList.some(mutation => mutation.attributeName === 'data-theme')
      if (themeAttributeChanged) {
        const themeValue = root.getAttribute('data-theme')
        SET_THEME(themeValue)
      }
    })

    observer.observe(root, { attributes: true })

    // Limpia el observador cuando el componente se desmonta
    return () => {
      observer.disconnect()
    }
  }, [])

  // useEffect(() => {
  //     const handleResize = () => {
  //         alert(window.innerHeight);
  //     };

  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowSize <= 1190) {
      const clickHandler = ({ target }) => {
        if (target.id !== 'butCountry') {
          if (openRef.current) setOPen(false)
        }
      }

      if (open) {
        window.addEventListener('click', clickHandler)
      }

      return () => window.removeEventListener('click', clickHandler)
    }
  }, [windowSize, open])

  useEffect(() => {
    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    colorSchemeMediaQuery.addEventListener('change', handleColorSchemeChange)

    const root = document.documentElement
    const temaSaved = root.getAttribute('data-theme')

    let tema = colorSchemeMediaQuery.matches ? 'dark' : 'light'
    if (temaSaved) tema = temaSaved
    SET_THEME(tema)

    return () => {
      colorSchemeMediaQuery.removeEventListener('change', handleColorSchemeChange)
    }
  }, [])

  function handleColorSchemeChange (event) {
    //   const newTheme = event.matches ? 'dark' : 'light';
    deleteThemeColor()
  }

  return (
        <div id={style.Header}>
            <div id={style.backdrop}></div>
            <div id={style.container}>
                <div id={style.brand}>
                    <div>
                        <img src={logo} alt="Logo Peregrinaciones Domínicos" />
                    </div>
                    <div>
                        <h1>Peregrinaciones Domínicanas {country === 'PE' ? 'Perú' : ''}</h1>
                    </div>
                </div>
                <div>
                    <div id={style.menuIcon} className={open ? style.open : undefined} onClick={(event) => { event.stopPropagation(); setOPen(!open) }}>
                      <span id={style.first}></span>
                      <span id={style.second}></span>
                      <span id={style.third}></span>
                    </div>
                    <nav>
                        <ul id={style.nav} className={open ? style.open : undefined}>
                            {
                                windowSize <= 1190
                                  ? (
                                    <p style={{ color: '#f3f3f3', fontSize: '16.5px', fontWeight: 500, width: '100%' }}>Menu</p>

                                    )
                                  : (
                                      null
                                    )
                            }
                            <li>
                                <div className={`${style.nav_li} ${path === '/' ? style.active : undefined}`} onClick={() => { navigate('/') }}>
                                    <label>
                                        Inicio
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className={`${style.nav_li} ${path === '/peregrinacion' ? style.active : undefined}`} onClick={() => { navigate('/peregrinacion') }}>
                                    <label >
                                        Peregrinación
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className={`${style.nav_li} ${path === '/testimonios' ? style.active : undefined}`} onClick={() => navigate('/testimonios')}>
                                    <label >
                                        Testimonios
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className={`${style.nav_li} ${path === '/contactanos' ? style.active : undefined}`} onClick={() => navigate('/contactanos')}>
                                    <label>
                                    Contáctanos
                                    </label>
                                </div>
                            </li>
                            <div id={style.country} onMouseEnter={() => { setPopCountry(true) }} onMouseLeave={() => setPopCountry(false)} >
                                <div id="butCountry" >
                                    {
                                        windowSize > 1190
                                          ? (
                                            <img src={arroIcon} alt={country === 'PE' ? 'Perú' : 'Ecuador'} />

                                            )
                                          : (
                                            <p style={{ color: '#f3f3f3', fontSize: '16.5px', fontWeight: 500, width: '100%', paddingTop: '10px' }}>Preferencias</p>
                                            )
                                    }
                                </div>
                                <div id={style.popoutCountry} style={{ display: popCountry || windowSize <= 1190 ? 'flex' : 'none' }} >
                                    <div className={style.iconOptions}>
                                        <div>
                                            <img title={country === 'PE' ? 'Perú' : 'Ecuador'} src={country === 'PE' ? peruFlag : ecuadorFlag} alt={country === 'PE' ? 'Perú' : 'Ecuador'} />
                                        </div>
                                        <div id={style.currentTheme} onClick={() => setThemeColor(THEME === 'dark' ? 'light' : 'dark')}>
                                            {
                                                THEME === 'dark'
                                                  ? (
                                                    <img src={sunIcon} alt={'Theme Icon'} />
                                                    )
                                                  : (
                                                    <img src={moonIcon} alt={country === 'PE' ? 'Perú' : 'Ecuador'} />
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <div id={style.amIAt} >
                                        ¿Estoy en?
                                    </div>
                                    <div className={style.paisOption} onClick={() => { setPopCountry(false); dispatch(setCountry('PE')) }} >
                                        Perú
                                    </div>
                                    <div className={style.paisOption} onClick={() => { setPopCountry(false); dispatch(setCountry('EC')) }} >
                                        Ecuador
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </nav>
                    </div>
            </div>
            <FlotingBubbles/>
        </div>
  )
}

export default Header

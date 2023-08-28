import style from './home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contactanos from '../../viewsPath/contactanos/Contactanos'
import Inicio from '../../viewsPath/inicio/Inicio'
import Testimonos from '../../viewsPath/testimonios/testimonios'
import Peregrinacion from '../../viewsPath/peregrinacion/peregrinacion'

const Home: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
        <div id={style.AbsoulteContainer}>
            <div>
                <div id={style.header} >
                    <Header/>
                </div>
                <div id={style.body}>
                    <div id={style.container}>
                        {
                            pathname === '/'
                              ? (
                                <Inicio/>
                                )
                              : pathname === '/contactanos'
                                ? (
                                <Contactanos/>
                                  )
                                : pathname === '/peregrinacion'
                                  ? (
                                <Peregrinacion/>
                                    )
                                  : pathname === '/testimonios'
                                    ? (
                                <Testimonos/>
                                      )
                                    : undefined
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
  )
}

export default Home

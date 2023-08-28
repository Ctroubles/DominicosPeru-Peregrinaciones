import style from './CountrySetUp.module.css'
import peruFlag from '../../assets/flags/Flag_of_Peru.png'
import ecuadorFlag from '../../assets/flags/Flag_of_Ecuador.png'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setCountry from '../../redux/actions/actions'
import { Country } from '../../enums'

const CountrySetUp: React.FC = () => {
  const dispatch = useDispatch()

  const [pick, setPick] = useState<Country>(Country.PE)

  useEffect(() => {
    console.log(pick)
  }, [pick])

  const nextHandler = (): void => {
    if (pick === Country.PE || pick === Country.EC) {
      dispatch(setCountry(pick))
    }
  }

  return (
        <div>
            <div id={style.View}>
                    <div id={style.box}>
                        <div id={style.title}>
                            <h2>
                                ¿En qué país estás?
                            </h2>
                        </div>
                        <div id={style.container}>
                            <div className={`${style.countryCards} ${pick === Country.PE ? style.active : undefined}`} onClick={() => { setPick(Country.PE) }} >
                                <div className={style.imgContainer}>
                                    <img src={peruFlag} alt="Bandera de Perú" />
                                </div>
                                <label>
                                    Perú
                                </label>
                            </div>
                            <div className={`${style.countryCards} ${pick === Country.EC ? style.active : undefined}`} onClick={() => { setPick(Country.EC) }}>
                                <div className={style.imgContainer}>
                                    <img src={ecuadorFlag} alt="Bandera de Ecuador" />
                                </div>
                                <label>
                                    Ecuador
                                </label>
                            </div>
                         </div>
                         <div id={style.continuaButton} className={`${(pick === Country.EC || pick === Country.PE) ? style.active : undefined}`}>
                            <button onClick={(pick === Country.EC || pick === Country.PE) ? () => { nextHandler() } : undefined}>Continuar</button>
                         </div>
                    </div>
            </div>
        </div>
  )
}

export default CountrySetUp

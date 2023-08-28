import React from 'react'
import style from './alert.module.css'
import succesLogo from '../../assets/icons/checkmark.svg'
import errorLogo from '../../assets/icons/xError.svg'
import { Phone } from '../../utils'
import { useSelector } from 'react-redux'
import { type RootState } from '../../redux/reducer/reducer'
import { Country } from '../../enums'

interface Props {
  status: boolean
  closeHandler: () => void
}

const Alert: React.FC<Props> = ({ status, closeHandler }) => {
  const country = useSelector((e: RootState) => e.country)

  return (
        <div id={style.AlertCover}>
                    <div id={style.alert}>
                        <div>
                            <div id={style.imgContainer}>
                               <img src={status ? succesLogo : errorLogo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className={!status ? style.error : undefined}>
                                {
                                    status ? '  ¡Gracias!' : 'Oops'
                                }
                            </h4>
                        </div>
                        <div>
                            <p>
                                {
                                    status ? 'Tu mensaje ha sido enviado correctamente, te contactaremos lo antes posible.' : `No se pudo envíar tu mensaje, intenta más tarde o comunicate a nuestro whatsapp ${country === Country.PE ? Phone.peru : Phone.ecuador}`
                                }

                            </p>
                        </div>
                        <div id={style.buttonContainer} className={!status ? style.error : undefined}>
                            <button onClick={closeHandler} type='button'>
                                ACEPTAR
                            </button>
                        </div>
                    </div>
        </div>
  )
}

export default Alert

import React from 'react';
import style from './alert.module.css'
import succesLogo from '../../assets/icons/checkmark.svg'



import errorLogo from '../../assets/icons/xError.svg';


const Alert = ({ status, closeHandler }) => {
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
                                    status ? 'Tu mensaje ha sido enviado correctamente, te contactaremos lo antes posible.' : 'No se pudo envíar tu mensaje, intenta más tarde o comunicate a nuestro whatsapp +51 999 999'
                                }

                            </p>
                        </div>
                        <div id={style.buttonContainer} className={!status ? style.error : undefined}>
                            <button onClick={() => closeHandler()}>
                                ACEPTAR
                            </button>
                        </div>
                    </div>
        </div>
  )
}

export default Alert

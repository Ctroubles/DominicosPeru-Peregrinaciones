import { useEffect, useRef, useState } from 'react'
import style from './contactanos.module.css'

import fWhite from '../../assets/social_media/F_white.svg'
import mailIcoon from '../../assets/social_media/mail_icon.png'
import whatsappIcon from '../../assets/social_media/whatsapp_icon.svg'
import emailjs from 'emailjs-com'
import { validators, validatorsLevel2 } from '../../validators/validators'
import Alert from '../../componets/alerts/alert'
import { useSelector } from 'react-redux'
import { FB_LINK, MAIL_LINK, WA_LINK } from '../../utils'
import type { IState } from '../../types'
import { type ContactFormFields, type ContactFormErrorFields, ContactFormFieldsKeys } from '../../enums'

const Contactanos: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const formU = useRef<HTMLFormElement | null>(null)

  const [succesAlert, setSuccesAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [loadingSend, setLoadingSend] = useState(false)
  const { country } = useSelector((state: IState) => state)
  const [form, setForm] = useState<ContactFormFields>({
    reply_to: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<ContactFormErrorFields>>({})

  const sendEmail = async (): Promise<void> => {
    const approved = validatorsLevel2(setErrors, form)
    if (approved) {
      try {
        setLoadingSend(true)
        // await emailjs.sendForm(
        //   process.env.REACT_APP_SERVICE_ID,
        //   process.env.REACT_APP_TEMPLATE_ID,
        //   formU.current,
        //   process.env.REACT_APP_USER_ID
        // )
        setLoadingSend(false)
        setSuccesAlert(true)
        setForm({
          reply_to: '',
          subject: '',
          message: ''
        })
      } catch (error) {
        setLoadingSend(false)
        setErrorAlert(true)
      }
    }
  }

  function handleAutoResize (event: React.ChangeEvent<HTMLTextAreaElement>): void {
    event.target.style.height = 'auto'
    event.target.style.overflow = 'hidden'
    event.target.style.height = event.target.scrollHeight + 'px'
  }

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const target = e.target.name as ContactFormFieldsKeys
    const value = e.target.value
    const valid = validators(target, value)

    if (valid) {
      setErrors({ ...errors, [target]: null })
      setForm({ ...form, [target]: value })
    }
  }

  useEffect(() => {
    const textAreaNode = textareaRef.current
    if (textAreaNode != null) {
      textAreaNode.style.height = 'auto'
      textAreaNode.style.height = `${textAreaNode.scrollHeight}px`
    }
  }, [])

  return (
             <div id={style.Contactanos}>
                <div id={style.container}>
                    <div>
                        <div id={style.left}>
                            <div>
                                <div>
                                    <h2>
                                        Contactános en nuestros canales
                                    </h2>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium dolorem nemo voluptatibus itaque autem eligendi debitis odio architecto deserunt cupiditate omnis excepturi, aliquam quibusdam, distinctio, mollitia molestiae quam laboriosam?
                                    </p>
                                </div>
                                <div>
                                    <div id={style.containerContacButtons}>
                                        <div>
                                            <a target="blank" href={country === 'PE' ? FB_LINK.peru : FB_LINK.ecuador}>
                                                <div className={style.contactButtons} style={{ backgroundColor: '#3b5998' }}>
                                                    <img src={fWhite} alt="" />
                                                    <span>Facebook</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a target="blank" href={country === 'PE' ? MAIL_LINK.peru : MAIL_LINK.ecuador}>
                                                <div className={style.contactButtons} style={{ backgroundColor: '#d80606' }}>
                                                    <img src={mailIcoon} alt="" />
                                                    <span>Correo</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={country === 'PE' ? WA_LINK.peru : WA_LINK.ecuador } target="blank">
                                                <div className={style.contactButtons} style={{ backgroundColor: '#0ab348' }}>
                                                    <img src={whatsappIcon} alt="" />
                                                    <span>Whatsapp</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={style.right}>
                            <form ref={formU}>
                                <div>
                                    <div className={`${style.inputsContainer} ${errors.subject != null ? style.error : undefined}`} id={style.divMarginBottom}>
                                        <input name={ContactFormFieldsKeys.subject} type="text" placeholder="Asunto" value={form.subject} onChange={(e) => { handlerChange(e) }} autoComplete="off"/>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${style.inputsContainer} ${errors.reply_to != null ? style.error : undefined}`} >
                                        <input name={ContactFormFieldsKeys.reply_to} type="text" placeholder="Correo de contacto" value={form.reply_to} onChange={(e) => { handlerChange(e) }} autoComplete="off" />
                                    </div>
                                </div>
                                <div>
                                    <div className={`${style.inputsContainer} ${errors.message != null ? style.error : undefined}`} style={{ marginBottom: '25px' }}>
                                        <textarea name={ContactFormFieldsKeys.message} ref={textareaRef} value={form.message} onChange={handlerChange} rows={5} placeholder="Escribe tu mensaje aquí" onInput={handleAutoResize} style={{ overflow: 'hidden', minHeight: '130px' }}/>
                                    </div>
                                </div>
                                <div>

                                    {
                                        !loadingSend
                                          ? (
                                                <div className={style.inputsContainer} style={{ cursor: 'pointer' }} id={style.sendButton} onClick={() => { sendEmail().catch(() => {}) }}>
                                                    <button style={{ pointerEvents: 'none' }} type="button">
                                                        Enviar
                                                    </button>
                                                </div>
                                            )
                                          : (
                                            <div className={style.inputsContainer} id={style.sendButton}>
                                                    <button style={{ pointerEvents: 'none' }} type="button">
                                                        <div id={style.spinner}></div>
                                                    </button>
                                            </div>
                                            )
                                    }

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    succesAlert
                      ? (
                        <Alert status={1} closeHandler={setSuccesAlert}/>
                        )
                      : null
                }
                {
                    errorAlert
                      ? (
                        <Alert status={0} closeHandler={setErrorAlert}/>
                        )
                      : null
                }
             </div>
  )
}

export default Contactanos

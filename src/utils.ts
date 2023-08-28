import { type ColorScheme } from './enums'

export const Phone = {
  peru: '+51 939736123',
  ecuador: '+59 3960918252'
}

const WHA_SETTINGS = {
  peruPhone: '51939736123',
  ecuadorPhone: '593960918252',
  message: 'Estoy%20interesado%20en%20realizar%20la%20peregrinaci%C3%B3n.'
}
const MAIL_SETTINGS = {
  peruMail: 'peregrinacionesdominicos@gmail.com',
  ecuadorMail: 'peregrinacionesdominicos@gmail.com',
  subject: 'Peregrinaciones Dominicana',
  PEmessage: 'Estoy Interesado/a en realizar la peregrinación desde Perú.',
  ECmessage: 'Estoy Interesado/a en realizar la peregrinación desde Ecuador.'
}
const FB_SETTINGS = {
  peru: 'https://www.facebook.com/',
  ecuador: 'https://www.facebook.com/'
}
/// //////  SETTINGS

export const WA_LINK = {
  peru: `https://api.whatsapp.com/send/?phone=${WHA_SETTINGS.peruPhone}&text=${WHA_SETTINGS.message}`,
  ecuador: `https://api.whatsapp.com/send/?phone=${WHA_SETTINGS.ecuadorPhone}&text=${WHA_SETTINGS.message}`
}
export const MAIL_LINK = {
  peru: `mailto:${MAIL_SETTINGS.peruMail}?subject=${MAIL_SETTINGS.subject}&body=${MAIL_SETTINGS.PEmessage}%0D%0A%0D%0A`,
  ecuador: `mailto:${MAIL_SETTINGS.ecuadorMail}?subject=${MAIL_SETTINGS.subject}&body=${MAIL_SETTINGS.ECmessage}%0D%0A%0D%0A`
}
export const FB_LINK = {
  peru: FB_SETTINGS.peru,
  ecuador: FB_SETTINGS.ecuador
}

export const setThemeColor = (value: ColorScheme): void => {
  if (value != null) {
    window.localStorage.setItem('theme', value)
    const root = document.documentElement
    root.setAttribute('data-theme', value)
  }
}

export const deleteThemeColor = (): void => {
  window.localStorage.removeItem('theme')
  const root = document.documentElement
  root.removeAttribute('data-theme')
}

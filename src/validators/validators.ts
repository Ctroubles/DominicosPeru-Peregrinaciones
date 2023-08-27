import { type ContactFormFields, type ContactFormErrorFields, ContactFormFieldsKeys } from '../enums'

const validators = (target: ContactFormFieldsKeys, value: string): boolean => {
  let result = false

  switch (target) {
    // case 'from_name': {
    //   value.length < 45 ? result = true : result = false
    //   const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/
    //   if (regex.test(value))result = true
    //   else result = false
    //   if (value.length === 0)result = true
    //   break
    // }
    case ContactFormFieldsKeys.reply_to : {
      if (value.length <= 45)result = true
      else result = false
      break
    }
    case ContactFormFieldsKeys.subject :{
      if (value.length <= 30 && /^(?!.*\s{2,})[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(value))result = true
      else result = false
      if (value.length === 0) result = true
      break
    }
    case ContactFormFieldsKeys.message : {
      if (value.length <= 300)result = true
      else result = false
      break
    }
    default:
      break
  }

  return result
}

const validatorsLevel2 = (setErrorsForm: React.Dispatch<React.SetStateAction<Partial<ContactFormErrorFields>>>, currentForm: ContactFormFields): boolean => {
  let approved = true

  const errors: Partial<ContactFormErrorFields> = {}
  type typeErrorField = keyof ContactFormErrorFields
  type typeField = keyof ContactFormFields

  for (const prop in currentForm) {
    const value = currentForm[prop as typeField]

    switch (prop as typeField) {
      // case 'from_name': {
      //   if (value.length > 45 || value.length < 1) {
      //     errors[prop as typeErrorField] = true
      //     approved = false
      //   }
      //   const regexName = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/
      //   if (!regexName.test(value)) {
      //     errors[prop as typeField] = true
      //     approved = false
      //   }
      //   break
      // }
      case 'reply_to': {
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!regexEmail.test(value)) {
          errors[prop as typeErrorField] = true
          approved = false
        }
        break
      }
      case 'subject':
        if (value.length > 30 || value.length < 1) {
          errors[prop as typeErrorField] = true
          approved = false
        }
        break

      case 'message':
        if (value.length > 300 || value.length < 1) {
          errors[prop as typeErrorField] = true
          approved = false
        };
        break

      default:
        break
    }
  }

  setErrorsForm(errors)
  return approved
}

export {
  validators,
  validatorsLevel2
}

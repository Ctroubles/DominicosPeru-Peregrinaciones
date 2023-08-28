// import type { ContactFormFields } from './types'

export enum Country {
  PE = 'PE',
  EC = 'EC'
}

export enum ContactFormFieldsKeys {
  reply_to = 'reply_to',
  subject = 'subject',
  message = 'message'
}

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light'
}

// Imported from here because it doesn't work correctly from .d.ts
export type ContactFormFields = {
  [key in ContactFormFieldsKeys]: string;
}

export type ContactFormErrorFields = {
  [key in ContactFormFieldsKeys]: boolean;
}

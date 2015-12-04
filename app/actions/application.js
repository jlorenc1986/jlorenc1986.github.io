import * as constants from '../constants/constants'

export function switchLocale(locale){

  return { type: constants.SWITCH_LOCALE, payload: locale}
}

'use strict'

/**
 *  GET REST Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { errMsg, restListener } from './Shared'

export const asyncGet = (url, token) => new Promise((res, rej) => {
  const what = 'asyncGet'
  try {
    let r = restListener(res, rej, what, 'success', 'fail')
    r.open('GET', url, true)
    if (token !== null) r.setRequestHeader('Authorization', 'bearer ' + token)
    r.send()
  } catch (ex) {console.log(errMsg(what, ex))}
})
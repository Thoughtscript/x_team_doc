'use strict'

/**
 *  GET FETCH helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

const init = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
}

export const get = url =>
  new Promise((firstResolve, firstReject) => fetch(url, init)
    .then(response => response.text().then(data => firstResolve(data))))

'use strict'

/**
 *  Default actions for interacting with various Redux stores.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export const UNSAFE_SAVE = 'UNSAFE_SAVE'
export const REMOVE = 'REMOVE'
export const GET = 'GET'
export const CLEAR = 'CLEAR'
export const SAFE_SAVE = 'SAFE_SAVE'

//Use for public info containing no sensitive information
export const unsafeSave = v => { type: UNSAFE_SAVE, v }

//Use for secure or private info
export const safeSave = v => { type: SAFE_SAVE, v }

export const remove = v => { type: REMOVE, v }

export const get = v => { type: GET, v }

export const clear = v => { type: CLEAR, v }
'use strict'

/**
 *  Local storage cache persistence helper.
 *
 *  Local storage abstraction for Redux allowing for the elimination of state-based store at top level.
 *
 *  Partitioned by localStorage key rather than state attribute or separate state stores.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const get = key => JSON.parse(localStorage.getItem(key))

export const remove = key => localStorage.removeItem(key)

export const clear = () => localStorage.clear()
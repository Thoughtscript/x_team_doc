/**
 * Markdown helpers.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const fs = require('fs'),
  l = require('../logger'),
  md = require('json2md')

module.exports = {

  toMarkdown: path => {
    return new Promise((res, rej) => {
      try {
        fs.readFile(path, (err, data) => {
          if (err) {
            l.log(`Exception: ${err}`)
            rej(`Exception: ${err}`)
          }

          const d = JSON.parse(data)

          //https://github.com/IonicaBizau/json2md
          let mdArr = [
            {h1: d['info']['title']}
          ]

          for (let i = 0; i < Object.keys(d).length; i++) {
            const key = Object.keys(d)[i], val = d[Object.keys(d)[i]]
            mdArr.push({h3: `${JSON.stringify(key)}`})
            mdArr.push({p: `${JSON.stringify(val)}`})
          }

          const mkd = md(mdArr)
          l.log(mkd)

          res({data: mkd, status: 200})
        })
      } catch (ex) {
        l.log(`Exception: ${ex}`)
        rej(`Exception: ${ex}`)
      }
    })
  }
}


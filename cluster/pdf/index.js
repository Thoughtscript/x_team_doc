/**
 * PDF helpers.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const fs = require('fs'), l = require('../logger'),
  config = require('../../cluster.config').data,
  pdfjs = require('pdfjs'),
  nl = require('os').EOL

const
  HELVETICA = require(`${config.basePath}font/Helvetica.json`),
  PDF_FILE = `${config.pdfPath}example.pdf`

module.exports = {

  toPdf: path => {
    return new Promise((res, rej) => {
      try {
        fs.readFile(path, (err, data) => {
          if (err) {
            l.log(`Exception: ${err}`)
            rej(`Exception: ${err}`)
          }

          const d = JSON.parse(data)

          let doc = new pdfjs.Document({font: new pdfjs.Font(HELVETICA), padding: 10})

          //https://github.com/rkusa/pdfjs/blob/master/docs/fragment.md#texttext-opts
          doc.pipe(fs.createWriteStream(PDF_FILE, {flags: 'a'}))

          for (let i = 0; i < Object.keys(d).length; i++) {

            const txt = `${JSON.stringify(Object.keys(d)[i])}: ${JSON.stringify(d[Object.keys(d)[i]])}` + nl + nl;

            if (i === 0) {
              let dt = doc.text({fontSize: 16, color: '#000', padding: 10})
              dt.add(txt)
            } else {
              let dt = doc.text({fontSize: 12, color: '#000', padding: 10})
              dt.add(txt)
            }

          }

          doc.end()

          res({data: PDF_FILE, status: 200})

        })
      } catch (ex) {
        l.log(`Exception: ${ex}`)
        rej(`Exception: ${ex}`)
      }
    })
  }

}


/**
 * Custom logger.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict';

const fs = require('fs'),
    nl = require('os').EOL;

module.exports = {
    /**
     * @param msg - STRING
     */
    log: msg => {
        const d = new Date(), l = fs.createWriteStream(`${require('../config').getClusterConfigurationCache().logPath}/${d.getMonth()}-${d.getDate()}-${d.getFullYear()}.log`, {flags: 'a'});

        try {
            const m = `NEW ENTRY - ${new Date()} - ${msg}`;
            console.log(m + nl);
            l.write(m + nl + nl);
        } catch (e) {
            const ex = `NEW EXCEPTION - ${new Date()} - Logger Exception ${e}`;
            console.log(ex + nl);
            l.write(ex + nl + nl);
        }

        l.close()
    },
    /**
     * @param msg - STRING
     */
    err: msg => {
        const d = new Date(), l = fs.createWriteStream(`${require('../config').getClusterConfigurationCache().logPath}/${d.getMonth()}-${d.getDate()}-${d.getFullYear()}.log`, {flags: 'a'});

        try {
            const m = `NEW EXCEPTION - ${new Date()} - ${msg}`;
            console.log(m + nl);
            l.write(m + nl + nl);
        } catch (e) {
            const ex = `NEW EXCEPTION - ${new Date()} - Logger Exception ${e}`;
            console.log(ex + nl);
            l.write(ex + nl + nl);
        }

        l.close()
    }
};

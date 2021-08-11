const fs = require('fs')
const dest = fs.createWriteStream('out.txt')
const dest = process.stdout
src.pipe(dest);
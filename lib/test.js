const path = require("path")
const {getAST}  = require('./parser')
const {getDependencies} = require('./parser')
const {transform} = require('./parser')



console.log(transform(getAST(path.join(__dirname,'../src/index.js'))))
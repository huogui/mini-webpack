const Compiler  = require('./compiler')


const options = require('../miniWebpack.config')


new Compiler(options).run()
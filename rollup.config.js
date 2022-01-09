const path = require('path')
const pkg = require('./package.json')

const resolve = function(...args){
	return path.resolve(__dirname, ...args)
}
export default {
  input: resolve('./src/index.js'),
  format: 'cjs',
  output: {
		file: resolve('./', pkg.main),
		format: 'umd',
		name: 'test'
	}
}
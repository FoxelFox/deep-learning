module.exports = {
  entry: {
    client: "./src/client/main.ts"
  },
  output: {
    filename: 'bin/[name]/bundle.js'
  },
  resolve: {
		extensions: ['', 'json', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
}
module.exports = {
  entry: {
    client: "./src/client/main.ts"
  },
  output: {
    filename: 'bin/[name]/bundle.js'
  },
  resolve: {
		extensions: ['', 'json', '.ts', '.js', '.html']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
}

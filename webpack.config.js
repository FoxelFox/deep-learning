module.exports = {
  entry: {
    client: "./src/client/main.ts"
  },
  output: {
    filename: 'bin/[name]/bundle.js'
  },
  resolve: {
		extensions: ['', 'json', '.ts', '.js', '.html', 'vs', 'fs']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
			{ test: /\.(vs|fs)$/, loader: 'shader' }

		]
	},
}

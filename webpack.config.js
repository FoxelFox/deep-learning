module.exports = {
  entry: {
    client: "./src/client/main.ts"
  },
  output: {
    filename: 'bin/[name]/bundle.js'
  },
	devtool: 'source-map',
  resolve: {
		extensions: ['', 'json', '.ts', '.js', '.html', 'vs', 'fs']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
			{ test: /\.(glsl)$/, loader: 'shader' }

		]
	},
}

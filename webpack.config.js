module.exports = {
	entry: './public/javascripts/entry/app.es6',
	publicPath: '/build/',
	output: {
		path: './public/bundle',
		filename: 'app.js'
	},
	module: {
		preLoaders: [
			{test: /\.jsx|es6$/, loader: "eslint-loader", exclude: /node_modules/},
		],
		loaders: [
			{ test: /\.jsx/, exclude: /node_modules/, loader: "babel",
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.es6/, exclude: /node_modules/, loader: "babel",
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /png|jpg|jpeg|gif|svg/, exclude: /node_modules/, loader: "url-loader"},
			{ test: /\.(otf|eot|svg|ttf|woff|woff2).*$/, loader: 'url-loader?name=[path][name].[ext]'},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
		]
	}
};
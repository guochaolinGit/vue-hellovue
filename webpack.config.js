const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode:'production',
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'public'
	},
    plugins: [
        new VueLoaderPlugin()
    ],
	module: {
		rules: [{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				loader: "babel-loader",
				options: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					}
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}

}
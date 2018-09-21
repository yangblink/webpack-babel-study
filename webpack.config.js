const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},
	stats: {
	  modules: false,
	  children: false
	},
	// module: {
	//   rules: [
	//     {
	//       test: /\.js$/,
	//       exclude: /(node_modules|bower_components)/,
	//       include: [
	//       	path.resolve(__dirname, './src')
	//       ],
	//       use: {
	//         loader: 'babel-loader',
	//         options: {
	//           presets: ['@babel/preset-env']
	//         }
	//       }
	//     }
	//   ]
	// },
	plugins: [
		new HtmlWebpackPlugin({
		  chunks: ['index'],
		  template: './src/index.html',
		  filename: 'index.html',
		  inject: true
		})
	],
	devServer: {
		quiet: true,
		clientLogLevel: 'none'
	}
}
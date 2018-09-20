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
	serve: {
	  open: true,
	  host: '0.0.0.0',
	  devMiddleware: {
	    logLevel: 'warn'
	  },
	  hotClient: {
	    logLevel: 'warn',
	    allEntries: true
	  }
	},
}
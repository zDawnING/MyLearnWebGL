const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		fpviewer: './src/fpviewer_index.js',
	},
	output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //静态资源路径修改
    publicPath: './dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 设置模板所在的位置，这里如果是相对路径的话，则 ./ === __dirname
      template: path.join(__dirname, './src/') + 'fpviewer_index.template.html',
      // 设置文件名称以及文件生成的位置，这里如果是相对路径的话，则 ./ === output.path
      filename: path.join(__dirname, './') + 'fpviewer_index.html',
      showErrors: true
      // excludeChunks: ['index']
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  mode: 'development',
  module: {
	  rules: [
	    {
	      test: /\.css$/,
	      use: [
	        'style-loader',
	        'css-loader'
	      ]
	    },
	    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      //以后再采用下载obj进行加载
      // {
      //   test: /\.obj$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        loader: 'url-loader'
      },
      //ES6兼容转换器
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // transforms: { dangerousForOf: true },
          presets: ['es2015'],
          // plugins: ['transform-runtime']
        }
      }
	  ]
	},
	resolve: {
		extensions: [".js", ".json"],
		alias: {
		  fpviewer: path.resolve(__dirname, 'src/views/fpviewer/'),
      vendor_gl: path.resolve(__dirname, 'src/vendor/webgl/'),
      shader_gl: path.resolve(__dirname, 'src/components/shader/'),
      res_gl: path.resolve(__dirname, 'src/assets/')
		}
	}
}
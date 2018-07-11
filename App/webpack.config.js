const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const TYPE = {
  WEBGL: 1,
  THREEJS: 2,
  THREEJS_PHYSICS: 3
};

let entries = [
  // webgl fpviewer
  {
    name: 'fpviewer',
    title: 'FPViewer',
    type: TYPE.WEBGL,
    path: './src/fpviewer_index.js'
  },
  // threejs lm_scene
  {
    name: 'lm_scene',
    title: 'Light Material Scene',
    type: TYPE.THREEJS,
    path: './src/lm_scene_index.js',
  },
  // threejs mmd
  {
    name: 'mmd',
    title: 'Miku Miku Dance',
    type: TYPE.THREEJS_PHYSICS,
    path: './src/mmd_index.js'
  },
  // threejs preview
  {
    name: 'preview',
    title: 'Preview Objects',
    type: TYPE.THREEJS,
    path: './src/preview_index.js'
  },
  {
    name: 'ar_scene',
    title: 'AR Scene',
    type: TYPE.THREEJS,
    path: './src/ar_scene_index.js'
  }
];
// 初始化
let plugins = [
  new CleanWebpackPlugin(['dist'])
];

let entryData = {};
entries.forEach(function(item){
  entryData[item.name] = item.path;
  if(item.type === TYPE.WEBGL){
    let hp = new HtmlWebpackPlugin({
      // 设置模板所在的位置，这里如果是相对路径的话，则 ./ === __dirname
      template: path.join(__dirname, './src/') + 'webgl_index.template.html',
      // 设置文件名称以及文件生成的位置，这里如果是相对路径的话，则 ./ === output.path
      filename: path.join('./') + item.name + '_index.html',
      // html title
      title: item.title,
      showErrors: true,
      // excludeChunks: ['index']
      chunks: [item.name]
    })
    plugins.push(hp);
  }
  if(item.type === TYPE.THREEJS){
    let hp = new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/') + 'threejs_index.template.html',
      filename: path.join('./') + item.name + '_index.html',
      // html title
      title: item.title,
      showErrors: true,
      chunks: [item.name]
    });
    plugins.push(hp);
  }
  if(item.type === TYPE.THREEJS_PHYSICS){
    let hp = new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/') + 'threejs_physics.template.html',
      filename: path.join('./') + item.name + '_index.html',
      title: item.title,
      showErrors: true,
      chunks: [item.name]
    });
    plugins.push(hp);
  }
})


module.exports = {
	entry: entryData,
	output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //静态资源路径修改
    publicPath: './'
  },
  plugins: plugins,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    // compress: true, // 开启压缩
    // open: true, // 打开浏览器
    port: 8090
  },
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
      {
        test: /\.(obj|mtl)$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      // { test: /\.obj$/, loader: 'file' },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        loader: 'url-loader'
      },
      //ES6兼容转换器
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
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
      // common
      res_gl: path.resolve(__dirname, 'src/assets/'),
      com_gl: path.resolve(__dirname, 'src/components/'),
      shader_gl: path.resolve(__dirname, 'src/components/shader/'),
      style_gl: path.resolve(__dirname, 'src/style/'),
      // webgl
		  fpviewer: path.resolve(__dirname, 'src/views/fpviewer/'),
      vendor_gl: path.resolve(__dirname, 'src/vendor/webgl/'),
      // threejs
      vendor_threejs: path.resolve(__dirname, 'src/vendor/threejs/'),
      lm_scene: path.resolve(__dirname, 'src/views/lm_scene/'),
      mmd: path.resolve(__dirname, 'src/views/mmd/'),
      preview: path.resolve(__dirname, 'src/views/preview/'),
      ar_scene: path.resolve(__dirname, 'src/views/ar_scene/'),
		}
	}
}
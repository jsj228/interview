var htmlWebpackPlugin=require('html-webpack-plugin');

var path=require('path')
module.exports={
	// context:__dirname,
	entry:"./src/script/index.js",
	output:{
		"filename":"./js/[name].js"
	},
	plugins: [ //引用htmlWebpackPlugin
	  	new htmlWebpackPlugin({
		    //指向项目的入口文件；这时就不需要在index.html入口文件中引入指定的js了
		    "template": 'index.html',
		    "filename":"index-ed.html",
		    "inject":'footer',
	  	})
	],
	module: {
	  	rules: [
	   	    { test: /\.js$/, 
	   	    	exclude:path.resolve(__dirname,"/node_modules/"), 
	   	    	include:path.resolve(__dirname,"/src/"),
	   	    	loader: "babel-loader" },
	   	    {test:/\.css$/,loader:"style-loader!css-loader?importLoaders=1!postcss-loader"},
        	{test:/\.less$/,loader:"style-loader!css-loader!less-loader!postcss-loader"},
    		{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader!postcss-loader"},
    		{test:/\.html$/,loader:"html-loader"},
    		{test:/\.(png|jpg|gif|svg)$/i,
    			loaders:[
    				'url-loader?limit=50000&name=img/[name]-min.[ext]',
    				'img-loader',
    			]
    			
    		}
        ]
	}
}

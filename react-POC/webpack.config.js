var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'bundle.js'
   },
	
   devServer: {
      contentBase: './'
   },
	
   module: {
      loaders: [
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader'
                                
         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
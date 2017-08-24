const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const compiler = webpack({
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app':"./main.ts"
    },
    output:{
        path: path.resolve(__dirname, "./dist"),
        //publicPath : "http://localhost:1234/me/yyb/phc/dist/"
    },
    resolve: {
        extensions: ['.ts', '.js']
      },
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test:/\.css$/,
                include:[path.resolve(__dirname, "./css")],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, "./app")],
                loader: 'raw-loader'
              },
            {
                test: /\.ts$/,
                loaders: 'awesome-typescript-loader!angular2-template-loader'
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                include:[path.resolve(__dirname, "./img")],
                loader:'file-loader?name=img/[name]-[hash].[ext]'
            }
        ]
    },
    devtool:"cheap-module-eval-source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
          }),
        new HtmlWebpackPlugin({
            template:'./temp.html',
            filename:'./spa.html',
            inject:'body',
            minify:{
                removeComments:true,
                //collapseWhitespace:true
            }
        }),
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),*/
        new UglifyJSPlugin({
            comments:false
        }),
    ]
});

compiler.run((err, stats) => {
    if (err || stats.hasErrors())console.log(stats.compilation.errors);
    else{
        console.log('set \'Angular4\' package success!');
        let num=0;
        const watching = compiler.watch({
            aggregateTimeout: 300,
            poll: undefined
        }, (err, stats) => {
            if (err || stats.hasErrors())console.log(stats.compilation.errors);
        else{console.log('package success : '+(++num))}
        })
    }
})
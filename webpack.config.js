module.exports = {
    entry: __dirname + '/public/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            }
        ]
    }
}

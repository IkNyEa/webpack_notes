const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置nodejs环境变量
//process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                /*
                  css兼容性处理：postcss --> postcss-loader postcss-preset-env

                  帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

                  "browserslist": {
                    
                    // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
                    
                    //可以在github上面搜索browserlist可以写development或者production的那些参数
                    "development": [
                      "last 1 chrome version",  最新的chorm、firefox、safari版本
                      "last 1 firefox version",
                      "last 1 safari version"
                    ],
                    // 生产环境：默认是看生产环境
                    "production": [
                      ">0.2%", 兼容超过99.8%的浏览器
                      "not dead",不要已经淘汰的浏览器
                      "not op_mini all" 不兼容所有的op_mini
                    ]
                  }
                */
                // 使用loader的默认配置
                // 'postcss-loader',
                // 修改loader的配置
                {
                    loader: 'postcss-loader',
                    /*options: {
                        ident: 'postcss',
                        plugins: () => [
                            // postcss的插件
                            require('postcss-preset-env')()
                        ]
                    }*/
                    ident: 'postcss',
                    options: {
                        postcssOptions: {

                            //打包后有兼容性样式代码
                            plugins: [
                                require('postcss-preset-env')
                            ],
                            //这样写就没有兼容性代码
                            /*plugins: () => [
                                // postcss的插件
                                require('postcss-preset-env')()
                              ]*/
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development'
};
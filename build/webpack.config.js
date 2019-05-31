const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: 5000,
        open: true,
        contentBase: path.join(__dirname, "../src")
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.(scss|css)$/,
                use: [
                    /** Use an entire chain of loaders instead of just one. Processed from bottom to top. */
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true,
                        }
                    }
                ]
            }
        ] 
    },
    plugins: [
        /** Since Webpack 4 */
        new webpack.LoaderOptionsPlugin({
            options: {
              handlebarsLoader: {}
            }
          }),
          new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          }),  
        new HtmlWebpackPlugin({
            title: 'Coffee Project',
            template: './src/index.handlebars',
            minify: devMode && {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            },
          })
      ]
  };
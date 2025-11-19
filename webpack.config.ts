import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type Mode = 'production' | 'development'

interface EnvVariables {
  mode: Mode
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    module: {
      rules: [
        {
          test: /\.tsx?$|\.jsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(woff)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name].[hash][ext][query]',
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: 'convertColors',
                      params: {
                        currentColor: true,
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          deleteOriginalAssets: false,
          generator: [
            {
              preset: 'webp',
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: [['imagemin-webp', { quality: 70 }]],
              },
            },
          ],
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['jpegtran', { progressive: true, quality: 75 }],
                [
                  'svgo',
                  { plugins: [{ name: 'removeViewBox', active: false }] },
                ],
              ],
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new ForkTsCheckerWebpackPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
          chunkFilename: 'css/[id].[contenthash].css',
        }),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          historyApiFallback: true,
          static: {
            directory: path.resolve(__dirname, 'public'),
          },
          compress: true,
          port: 3000,
          open: true,
          hot: true,
        }
      : undefined,
  }
  return config
}

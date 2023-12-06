/*
 * @Description:
 * @Author: Rfan
 * @Date: 2021-11-17 22:58:46
 * @LastEditTime: 2022-03-25 11:13:25
 */

const SassResourcesLoader = require('sass-resources-loader-craco');
const CracoLessPlugin = require('craco-less');
const modifyVars = require('./src/assets/styles/modifyVars');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars,
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: SassResourcesLoader,
      options: {
        resources: ['./src/assets/styles/variables.scss']
      }
    }
  ]
};

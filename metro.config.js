const { getDefaultConfig } = require('@react-native/metro-config');
const dev_config = require('./dev')
const prod_config = require('./prod')

// 获取默认配置
const defaultConfig = getDefaultConfig(__dirname);
// 假设我们有两套不同的扩展名配置，一套用于开发，一套用于生产
const devSourceExts = [...defaultConfig.resolver.sourceExts];
const prodSourceExts = [...defaultConfig.resolver.sourceExts];
// 使用NODE_ENV环境变量来判断当前是开发环境还是生产环境
const isProd = process.env.NODE_ENV === 'production';
// 根据环境变量动态调整配置
const environmentConfig = {
  resolver: {
    sourceExts: isProd ? prodSourceExts : devSourceExts,
  },
};

// 合并配置
module.exports = {
  ...defaultConfig,
  ...environmentConfig,
  resolver: {
    ...defaultConfig.resolver,
    ...environmentConfig.resolver,
  },
};
let host = 'https://api.youzixy.com/'
// vue.config.js
const vueConfig = {
	configureWebpack: {
		devServer: {
			disableHostCheck: true
		}
	},
	devServer: {
		port: 8000,
		proxy: {
			'/': { //这里的key就是axios的baseURL
				target: host,
				changeOrigin: true, //开启跨域
				pathRewrite: { // 路径重写，
					'^/': '' // 替换target中的请求地址
				}
			}
		}
	},
	// disable source map in production
	productionSourceMap: false,
	lintOnSave: false,
	// babel-loader no-ignore node_modules/*
	transpileDependencies: []
}
module.exports = vueConfig

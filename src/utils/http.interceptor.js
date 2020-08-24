// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: '',
		// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
		// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
		originalData: true,
		loadingText: '努力加载中...',
		loadingTime: 1500,
		// 设置自定义头部content-type
		header: {
			'Authorization': vm.vuex_token,
			'X-TENANT-ID': 'jiawen:pethos@2020',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		config.header.Authorization = vm.vuex_token;
		return config;
	}
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.statusCode == 200) {
			return res.data
		} else if (res.statusCode == 400) {
			// vm.$u.toast(res.data.message)
			return false
		} else if (res.statusCode == 401) {
			vm.$u.toast('登录过期，请重新登录')
			setTimeout(() => {
				vm.$u.route('/pages/login/login')
			}, 1500)
			return false
		} else if (res.statusCode == 404) {
			vm.$u.toast('暂无接口');
			return false
		} else if (res.statusCode == 502) {
			vm.$u.toast('服务器开小差了,请稍后再试');
			return false
		} else return false
	}
}

export default {
	install
}

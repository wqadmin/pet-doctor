const hostSso = 'http://user-h5.jw.iisu.cn/server/sso/'
// const hostUser = 'http://user-h5.jw.iisu.cn/server/data/'
const hostUser = 'http://10.65.56.75:8383/'

const install = (Vue, vm) => {
	let wxLogin = (params = {}) => vm.$u.post(hostSso + 'wechat/login', params) // 微信登录
	let bindLogin = (params = {}) => vm.$u.post(hostSso + 'wechat/bindlogin', params) // 绑定登录
	let checkMobile = (params = {}) => vm.$u.get(hostUser + 'user/doctor/checkmobile', params) // 检测手机号
	let code = (params = {}) => vm.$u.post(hostSso + 'code/send', params) // 获取验证码
	
	let appointmentPage = (params = {}) => vm.$u.get(hostUser + 'user/appointment/doctor/page', params) // 挂号列表
	let illnessPage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/doctor/medical/record/page', params) // 顾客病例
	let testPage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/check/result/page', params) // 顾客检测报告
	let feePage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/goods/sales/page', params) // 排班打卡
	vm.$u.api = {
		wxLogin,
		bindLogin,
		checkMobile,
		code,
		appointmentPage,
		illnessPage,
		testPage,
		feePage
	}
}

export default {
	install
}

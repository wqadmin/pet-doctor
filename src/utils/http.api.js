const hostSso = 'http://user-h5.jw.iisu.cn/server/sso/'
const hostUser = 'http://user-h5.jw.iisu.cn/server/data/'
// const hostUser = 'http://10.65.56.75:8381/'

const install = (Vue, vm) => {
	let wxLogin = (params = {}) => vm.$u.post(hostSso + 'wechat/login', params) // 微信登录
	let bindLogin = (params = {}) => vm.$u.post(hostSso + 'wechat/bindlogin', params) // 绑定登录
	let checkMobile = (params = {}) => vm.$u.get(hostUser + 'user/appointment/checkmobile', params) // 检测手机号
	let code = (params = {}) => vm.$u.post(hostSso + 'code/send', params) // 获取验证码
	
	let appointmentPage = (params = {}) => vm.$u.get(hostUser + 'user/appointment/page', params) // 获取预约列表
	let illnessPage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/medical/record/page', params) // 获取病例列表
	let testPage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/check/result/page', params) // 获取检测结果
	// let testPage = (params = {}) => vm.$u.get(hostUser + 'user/general/checkSetting/item/page', params) // 获取检测列表
	// let testPage = (params = {}) => vm.$u.get(hostUser + 'user/general/checkSetting/item/search', params) // 获取检测单查询
	let feePage = (params = {}) => vm.$u.get(hostUser + 'user/consumer/goods/sales/page', params) // 获取消费记录
	
	let hospitalList = (params = {}) => vm.$u.get(hostUser + 'user/hospital/list', params) // 获取医院列表
	let petList = (params = {}) => vm.$u.get(hostUser + 'user/pet/list', params) // 获取宠物列表
	let petTypeList = (params = {}) => vm.$u.get(hostUser + 'user/pet/pagespecies', params) // 获取宠物类型列表
	let serveList = (params = {}) => vm.$u.get(hostUser + 'user/appointment/type/page', params) // 获取服务类型
	let appointment = (params = {}) => vm.$u.post(hostUser + 'user/appointment/apply', params) // 申请预约

	vm.$u.api = {
		wxLogin,
		bindLogin,
		checkMobile,
		code,
		appointmentPage,
		illnessPage,
		testPage,
		feePage,
		hospitalList,
		petList,
		petTypeList,
		serveList,
		appointment
	}
}

export default {
	install
}

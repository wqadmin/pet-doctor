<template>
	<view>
		<u-toast ref="uToast" />
	</view>
</template>
<script>
	export default {
		data() {
			return {
				code: ''
			}
		},
		onLoad() {},
		onReady() {},
		onShow() {
			this.$nextTick(() => {
				this.getCode()
			})
		},
		methods: {
			getCode() {
				if (String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger") {
					let code = this.getUrlCode('code')
					if (code === null || code === '') {
						window.location.href =
							`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.wxAppID}&redirect_uri=${encodeURIComponent('http://doctor-h5.jw.iisu.cn')}&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect`
					} else {
						this.$nextTick(() => {
							this.goWxLogin(code)
						})
					}
				}
			},
			getUrlCode(name) {
				return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1]
					.replace(/\+/g, '%20')) || null
			},
			goWxLogin(code) {
				this.$u.api.wxLogin({
					wxCode: code,
					wxCodeType: 'wx_h5'
				}).then(res => {
					if (res.success) {
						this.$u.vuex('vuex_token', `Bearer ${res.data.token}`)
						console.log(this.vuex_token)
						this.$refs.uToast.show({
							title: '登录成功',
							type: 'success',
							duration: 500,
							url: '/pages/tabs/tab1'
						})
					}
				}).catch(err => {
					if (err.statusCode >= 500) {
						this.$refs.uToast.show({
							title: '服务器开小差了,请稍后再试',
							type: 'error',
						})
					} else {
						window.location.href =
							`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.wxAppID}&redirect_uri=${encodeURIComponent('http://doctor-h5.jw.iisu.cn/#/pages/login/login')}&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect`
					}
				})
			}
		}
	}
</script>

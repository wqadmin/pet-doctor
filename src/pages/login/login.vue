<template>
	<view class="page">
		<view class="content_top">
			<view class="content_top_left">
				<text>欢迎使用医生小助手！</text>
			</view>
			<u-image width="121rpx" height="131rpx" style="margin-right: 50rpx;" src="/static/logo.png"></u-image>
		</view>
		<view class="list">
			<view class="list_item">
				<u-row gutter="50">
					<u-col span="12" style="padding: 0;">
						<text class="list_item_title">手机号</text>
					</u-col>
				</u-row>
				<u-row gutter="50">
					<u-col span="12" style="padding: 0;">
						<u-input v-model="mobile" type="number" maxlength="11" :border="false" placeholder="请输入您的手机号码" />
					</u-col>
				</u-row>
			</view>
			<view class="list_item">
				<u-row gutter="50">
					<u-col span="12" style="padding: 0;">
						<text class="list_item_title">验证码</text>
					</u-col>
				</u-row>
				<u-row gutter="50">
					<u-col span="8" style="padding: 0;">
						<u-input v-model="code" type="number" maxlength="6" :border="false" placeholder="请输入您的短信验证码" />
					</u-col>
					<u-col span="4" style="padding: 0;text-align: right;">
						<u-button size="mini" type="primary" :disabled="disabled" ripple @click="getCode">{{codeText}}</u-button>
						<u-verification-code ref="uCode" :seconds="30" @change="codeChange"></u-verification-code>
					</u-col>
				</u-row>
			</view>
			<view class="custom_button">
				<u-button @click="onLogin" type="primary" style="height: 100%;line-height: 100%;" :ripple="true" shape="square">
					<text>绑定</text>
				</u-button>
			</view>
		</view>
		<view class="page_bottom">
			<u-image width="100%" height="500rpx" src="/static/tab1/login_bg.png"></u-image>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '123123123123',
				code: '132123',
				codeText: '',
				disabled: false
			}
		},
		onLoad() {},
		onShow() {},
		onPullDownRefresh() {},
		onPageScroll(options) {
			if (options.scrollTop > 60) {} else {}
		},
		onTabItemTap(e) {},
		methods: {
			vuexChange(index) {
				this.$u.vuex('vuex_demo', index);
			},
			codeChange(text) {
				this.codeText = text
				if (text == '重新获取') {
					this.disabled = false
				}
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.disabled = true
					setTimeout(() => {
						uni.hideLoading();
						this.$refs.uCode.start()
					}, 1000)
				} else {
					this.disabled = true
					this.$u.toast('倒计时结束后再发送')
				}
			},
			onLogin() {
				console.log("logindoctor")
				if (!this.mobile) {
					this.$refs.uToast.show({
						title: '请输入您的手机号码',
						type: 'warning',
					})
				} else if (!this.code) {
					this.$refs.uToast.show({
						title: '请输入您的短信验证码',
						type: 'warning',
					})
				} else {
					this.$refs.uToast.show({
						title: '登录成功',
						type: 'success',
						duration: 500,
						url: '/pages/tabs/tab1'
					})
				}
			}
		}
	}
</script>
<style>
	page,
	uni-page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.page {
		height: 100%;

		.content_top {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding-top: 40rpx;

			.content_top_left {
				position: relative;

				text {
					font-size: 46rpx;
					font-weight: 600;
					color: rgba(50, 50, 50, 1);
					line-height: 65rpx;
					margin: 50rpx 0 0 50rpx;
				}
			}

			.content_top_left::after {
				content: "LOGIN";
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				margin: auto;
				width: 468rpx;
				height: 240rpx;
				font-size: 140rpx;
				font-weight: 400;
				color: rgba(246, 248, 251, 1);
				line-height: 196rpx;
				letter-spacing: 7px;
				z-index: -1;
			}
		}

		.page_content {
			padding: 50rpx;
		}
	}

	.list {
		width: 100%;
		padding: 60rpx 50rpx 0;

		.list_item {
			width: 100%;
			background: rgba(246, 248, 251, 1);
			border-radius: 6rpx;
			margin-bottom: 30rpx;
			padding: 20rpx 30rpx 4rpx;

			.list_item_title {
				width: 100%;
				font-size: 26rpx;
				font-weight: 400;
				color: rgba(112, 121, 136, 1);
			}
		}
	}

	.custom_button {
		width: 100%;
		height: 100rpx;
		margin-top: 40rpx;
	}

	.page_bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: -1;
	}
</style>

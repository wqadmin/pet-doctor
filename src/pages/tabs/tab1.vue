<template>
	<view class="page">
		<view class="page_top">
			<u-row gutter="0" style="height: 100%;padding: 0 60rpx;">
				<u-col span="3">
					<u-avatar :src="src" size="120"></u-avatar>
				</u-col>
				<u-col span="6">
					<view style="font-size: 36rpx;">
						<text>张三</text>
					</view>
					<view style="font-size: 28rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 6rpx;">
						<text>考勤医院 - 衡山路分院</text>
					</view>
				</u-col>
				<u-col span="3" style="font-size: 26rpx;text-align: right;">
					<text>2020.04.07</text>
				</u-col>
			</u-row>
		</view>
		<view class="list">
			<u-cell-group :border="false">
				<u-cell-item @click="goto(1)" :center="true" :border-bottom="false" class="list_item">
					<u-image slot="icon" width="44rpx" height="44rpx" src="/static/tab1/tab1_list1.png"></u-image>
					<text slot="title" class="list_item_title">挂号列表</text>
				</u-cell-item>
				<u-cell-item @click="goto(2)" :center="true" :border-bottom="false" class="list_item">
					<u-image slot="icon" width="44rpx" height="44rpx" src="/static/tab1/tab1_list2.png"></u-image>
					<text slot="title" class="list_item_title">顾客病历</text>
				</u-cell-item>
				<u-cell-item @click="goto(3)" :center="true" :border-bottom="false" class="list_item">
					<u-image slot="icon" width="44rpx" height="44rpx" src="/static/tab1/tab1_list3.png"></u-image>
					<text slot="title" class="list_item_title">顾客检验报告</text>
				</u-cell-item>
				<u-cell-item @click="goto(4)" :center="true" :border-bottom="false" class="list_item">
					<u-image slot="icon" width="44rpx" height="44rpx" src="/static/tab1/tab1_list4.png"></u-image>
					<text slot="title" class="list_item_title">排班打卡</text>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="page_bottom">
			<u-image width="100%" height="178rpx" src="/static/tab1/bottom.png"></u-image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
			}
		},
		onLoad() {
		},
		onShow() {
		},
		onPullDownRefresh() {},
		onPageScroll(options) {
			if (options.scrollTop > 60) {} else {}
		},
		onTabItemTap(e) {},
		methods: {
			goto(index) {
				if (index == 1) {
					uni.navigateTo({
						url: '/pages/tab1/myAppointment'
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: '/pages/tab1/illnessBill'
					})
				} else if (index == 3) {
					uni.navigateTo({
						url: '/pages/tab1/testReport'
					})
				} else if (index == 4) {
					uni.navigateTo({
						url: '/pages/tab1/feeBill'
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

	page .uni-page-head-hd {
		display: none;
	}
</style>
<style lang="scss" scoped>
	.page {
		height: 100%;
	}

	.page .uni-page-head-hd {
		display: none;
	}

	.page_top {
		width: 100%;
		height: 320rpx;
		// background-color: #00AEA5;
		color: #FFFFFF;
		padding-top: var(--status-bar-height);
		background: linear-gradient(315deg, rgba(62, 205, 189, 1) 0%, rgba(0, 174, 165, 1) 100%);
	}

	.list {
		width: 630rpx;
		margin: auto;
		padding-top: 60rpx;

		.list_item {
			width: 630rpx;
			height: 120rpx;
			// background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 30rpx 0px rgba(0, 0, 0, 0.08);
			border-radius: 10rpx;
			margin-bottom: 40rpx;

			.list_item_title {
				font-size: 30rpx;
				font-weight: 500;
				color: rgba(50, 50, 50, 1);
				letter-spacing: 1rpx;
				margin-left: 20rpx;
			}
		}
	}

	.page_bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>

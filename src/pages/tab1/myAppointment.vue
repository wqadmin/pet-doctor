<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#00AEA5" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false"
				 bar-width="120" bar-height="4" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="list_item" v-for="(res, index) in orderList[0]" :key="res.id">
							<u-row gutter="0" class="list_item_title">
								<u-col span="6">
									<view>顾客信息</view>
									<text>张三（豆豆）</text>
								</u-col>
								<u-col span="6" style="text-align: right;color: #00AEA5;font-size: 28rpx;">待接诊</u-col>
							</u-row>
							<u-row gutter="0" style="margin-top: 24rpx;" class="list_item_title">
								<u-col span="6">
									<view>挂号时间</view>
									<text>2020-03-24 15:00</text>
								</u-col>
								<u-col span="6" style="text-align: right;">
									<u-button style="background-color: #3C69FC;width: 116rpx;height: 60rpx;color: #FFFFFF;margin-right: 0;" ripple>接诊</u-button>
								</u-col>
							</u-row>
						</view>
						<u-empty v-show="orderList[0].length <=0" mode="list"></u-empty>
						<u-loadmore v-show="orderList[1].length >0" :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="list_item" v-for="(res, index) in orderList[1]" :key="res.id">
							<u-row gutter="0" class="list_item_title">
								<u-col span="6">
									<view>顾客信息</view>
									<text>张三（豆豆）</text>
								</u-col>
								<u-col span="6" style="text-align: right;color: #00AEA5;font-size: 28rpx;">待接诊</u-col>
							</u-row>
							<u-row gutter="0" style="margin-top: 24rpx;" class="list_item_title">
								<u-col span="6">
									<view>挂号时间</view>
									<text>2020-03-24 15:00</text>
								</u-col>
								<u-col span="6">
									<view>预约时间</view>
									<text>2020-03-24 15:00</text>
								</u-col>
							</u-row>
						</view>
						<u-empty v-show="orderList[1].length <=0" mode="list"></u-empty>
						<u-loadmore v-show="orderList[1].length >0" :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y :enable-back-to-top="true" style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="list_item" v-for="(res, index) in orderList[2]" :key="res.id">
							<u-row gutter="0" class="list_item_title">
								<u-col span="6">
									<view>顾客信息</view>
									<text>张三（豆豆）</text>
								</u-col>
								<u-col span="6" style="text-align: right;color: #707988;font-size: 28rpx;">已接诊</u-col>
							</u-row>
							<u-row gutter="0" style="margin-top: 24rpx;" class="list_item_title">
								<u-col span="6">
									<view>挂号时间</view>
									<text>2020-03-24 15:00</text>
								</u-col>
								<u-col span="6">
									<view>预约时间</view>
									<text>2020-03-24 15:00</text>
								</u-col>
							</u-row>
						</view>
						<u-empty v-show="orderList[2].length <=0" text="暂无历史记录" mode="history"></u-empty>
						<u-loadmore v-show="orderList[2].length >0" :status="loadStatus[2]" bgColor="#f2f2f2"></u-loadmore>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [
					[],
					[],
					[]
				],
				dataList: [{
					id: 0
				}],
				list: [{
						name: '今日挂号'
					},
					{
						name: '预约挂号'
					},
					{
						name: '历史挂号'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore'],
			};
		},
		onLoad() {
			this.getOrderList(0)
			this.getOrderList(1)
			// this.getOrderList(2)
			// uni.getSystemInfo({
			//     success: function (res) {
			// 		this.windowWidth = res.windowWidth
			//     }
			// })
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		computed: {},
		methods: {
			// tab栏切换
			change(index) {
				this.swiperCurrent = index
				// this.current = index
				// this.getOrderList(index)
			},
			transition(e) {
				let dx = e.detail.dx
				this.$refs.tabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current
				this.$refs.tabs.setFinishCurrent(current)
				this.swiperCurrent = current
				this.current = current
			},
			// 页面数据
			getOrderList(idx) {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.dataList.length - 1)
					let data = JSON.parse(JSON.stringify(this.dataList[index]))
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			reachBottom() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background: rgba(249, 249, 249, 1);
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.list_item {
		width: 100%;
		padding: 20rpx 30rpx;
		background: rgba(255, 255, 255, 1);
		margin: 10rpx 0;

		.list_item_title {
			width: 100%;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(112, 121, 136, 1);

			text {
				font-size: 30rpx;
				font-weight: 500;
				color: rgba(50, 50, 50, 1);
				letter-spacing: 1rpx;
			}
		}

		.list_item_label {
			font-size: 30rpx;
			font-weight: 500;
			color: rgba(50, 50, 50, 1);
			letter-spacing: 1rpx;
		}

		.list_item_right {
			font-size: 28rpx;
			font-weight: 500;
			color: rgba(0, 174, 165, 1);
		}
	}

	.c_subsection {
		.u-item-bg {
			bottom: 0 !important;
			border-radius: 0 !important;
			border-bottom: 4rpx solid #00AEA5 !important;
			transition: all 0.15s ease 0s !important;
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;

		.u-tabs-box {
			background-color: #FFFFFF;
		}
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
</style>

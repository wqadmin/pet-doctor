<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<!-- <u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper> -->
				<view>
					<u-subsection class="c_subsection" style="background-color: #FFFFFF;" bgColor="#ffffff" active-color="#00AEA5"
					 :list="list" :current="current" @change="change"></u-subsection>
					<!-- <u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs> -->
				</view>
				<!-- <view class="">
					<u-gap style="width: 33.33333333%;transition: all 0.35s ease 0s;" :style="[tabBarStyle]" height="4" bg-color="#00AEA5"></u-gap>
				</view> -->
				<u-row gutter="0">
					<u-col span="4">
						<u-gap v-show="current == 0" height="4" bg-color="#00AEA5"></u-gap>
					</u-col>
					<u-col span="4">
						<u-gap v-show="current == 1" height="4" bg-color="#00AEA5"></u-gap>
					</u-col>
					<u-col span="4">
						<u-gap v-show="current == 2" height="4" bg-color="#00AEA5"></u-gap>
					</u-col>
				</u-row>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="">
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
										<u-button style="background-color: #3C69FC;width: 116rpx;height: 60rpx;color: #FFFFFF;margin-right: 0;"
										 ripple>接诊</u-button>
									</u-col>
								</u-row>
							</view>
							<view v-show="orderList[0].length <=0" class="centre">
								<u-empty mode="list"></u-empty>
							</view>
							<u-loadmore v-show="orderList[1].length >0" :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="">
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
							<view v-show="orderList[1].length <=0" class="centre">
								<u-empty mode="list"></u-empty>
							</view>
							<u-loadmore v-show="orderList[1].length >0" :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y :enable-back-to-top="true" style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view>
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
							<view v-show="orderList[2].length <=0" class="centre">
								<u-empty text="暂无历史记录" mode="history"></u-empty>
							</view>
							<u-loadmore v-show="orderList[2].length >0" :status="loadStatus[2]" bgColor="#f2f2f2"></u-loadmore>
						</view>
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
					[],
					[]
				],
				dataList: [{
						id: 1,
						store: '夏日流星限定贩卖',
						deal: '交易成功',
						goodsList: [{
								goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
								title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
								type: '灰色;M',
								deliveryTime: '付款后30天内发货',
								price: '348.58',
								number: 2
							},
							{
								goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
								title: '【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
								type: '45cm;S',
								deliveryTime: '付款后30天内发货',
								price: '135.00',
								number: 1
							}
						]
					},
					{
						id: 2,
						store: '江南皮革厂',
						deal: '交易失败',
						goodsList: [{
							goodsUrl: '//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg',
							title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
							type: '粉色;M',
							deliveryTime: '付款后7天内发货',
							price: '128.05',
							number: 1
						}]
					},
					{
						id: 3,
						store: '三星旗舰店',
						deal: '交易失败',
						goodsList: [{
								goodsUrl: '//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg',
								title: '三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机',
								type: '4K，广色域',
								deliveryTime: '保质5年',
								price: '1998',
								number: 3
							},
							{
								goodsUrl: '//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg',
								title: '美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)',
								type: '容量大，速冻',
								deliveryTime: '保质5年',
								price: '2354',
								number: 1
							}
						]
					},
					{
						id: 4,
						store: '三星旗舰店',
						deal: '交易失败',
						goodsList: [{
								goodsUrl: '//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg',
								title: '法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装',
								type: '4K，广色域',
								deliveryTime: '珍藏10年好酒',
								price: '1543',
								number: 3
							},
							{
								goodsUrl: '//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg',
								title: '蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装',
								type: '一打',
								deliveryTime: '口感好',
								price: '120',
								number: 1
							}
						]
					},
					{
						id: 5,
						store: '三星旗舰店',
						deal: '交易成功',
						goodsList: [{
							goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg',
							title: '企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108',
							type: '识别效率高',
							deliveryTime: '使用方便',
							price: '451',
							number: 9
						}]
					}
				],
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
			reachBottom() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			},
			// 页面数据
			getOrderList(idx) {
				console.log(idx)
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index
				this.current = index
				if (index == 1 || index == 0) {
					this.getOrderList(index)
				} else {

				}
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				// this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
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

	.centre {
		text-align: center;
		margin: auto;
		padding: 200rpx 0;
		font-size: 32rpx;

		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
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

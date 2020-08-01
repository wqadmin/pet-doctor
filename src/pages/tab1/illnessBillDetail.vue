<template>
	<view class="page">
		<view class="list">
			<u-collapse class="list_group" :head-style="headerStyle">
				<u-collapse-item v-for="(item, index) in list" :key="index" :open="item.open" class="list_item">
					<view style="width: inherit;" slot="title">
						<view class="">
							<text class="item_title">{{item.head}}</text>
						</view>
						<view style="display: flex;justify-content: space-between;">
							<text class="item_describe">{{item.describe}}</text>
							<text class="item_describe">{{item.time}}</text>
						</view>
					</view>
					<view class="">
						<u-table padding="30rpx 0" align="left" bgColor="rgba(248,249,250,1)" borderColor="rgba(0,0,0,0)">
							<u-tr class="c_table_body" v-for="(info, index) in item.infoList" :key="index">
								<u-td width="30%" style="color: #707988;">{{info.title}}</u-td>
								<u-td>{{info.name}}</u-td>
							</u-tr>
						</u-table>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					head: "骨折（豆豆）",
					time: '2020-03-03',
					describe: '就诊于 xxxxxx医院',
					open: false,
					infoList: [{
						title: '治疗科目',
						name: 'xxxxx医院'
					}, {
						title: '病情分类',
						name: '豆豆'
					}, {
						title: '就诊时间',
						name: '2020-04-20  12:00'
					}, {
						title: '主治医生',
						name: '圆滑'
					}, {
						title: '宠物体重',
						name: '100kg'
					}, {
						title: '主诉记录',
						name: '腹痛、口臭'
					}, {
						title: '病情诊断',
						name: '豆豆的胃炎犯了'
					}, {
						title: '处理治疗',
						name: '胃必治一盒'
					}, {
						title: '医嘱',
						name: '注意不要吃生冷食物注意不要吃生冷食物注意不要吃生冷食物注意不要吃生冷食物'
					}]
				}, {
					head: "骨折（豆豆）",
					time: '2020-02-02',
					describe: '就诊于 xxxxxx医院',
					open: false,
					infoList: [{
						title: '治疗科目',
						name: 'xxxxx医院'
					}, {
						title: '病情分类',
						name: '豆豆'
					}, {
						title: '就诊时间',
						name: '2020-04-20  12:00'
					}, {
						title: '主治医生',
						name: '圆滑'
					}, {
						title: '宠物体重',
						name: '100kg'
					}, {
						title: '主诉记录',
						name: '腹痛、口臭'
					}, {
						title: '病情诊断',
						name: '豆豆的胃炎犯了'
					}, {
						title: '处理治疗',
						name: '胃必治一盒'
					}, {
						title: '医嘱',
						name: '注意不要吃生冷食物'
					}]
				}, {
					head: "骨折（豆豆）",
					time: '2020-02-02',
					describe: '就诊于 xxxxxx医院',
					open: false,
					infoList: [{
						title: '治疗科目',
						name: 'xxxxx医院'
					}, {
						title: '病情分类',
						name: '豆豆'
					}, {
						title: '就诊时间',
						name: '2020-04-20  12:00'
					}, {
						title: '主治医生',
						name: '圆滑'
					}, {
						title: '宠物体重',
						name: '100kg'
					}, {
						title: '主诉记录',
						name: '腹痛、口臭'
					}, {
						title: '病情诊断',
						name: '豆豆的胃炎犯了'
					}, {
						title: '处理治疗',
						name: '胃必治一盒'
					}, {
						title: '医嘱',
						name: '注意不要吃生冷食物'
					}]
				}],
				headerStyle: {
					width: '100%',
					'padding': '10rpx 10rpx 10rpx 30rpx',
					'align-items': 'flex-end',
					'font-size': '24rpx'
				}
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
			onCall(phone) {
				uni.showModal({
					title: '提示',
					content: '是否要拨打医院电话' + phone,
					success(res) {
						if (res.confirm) {
							// #ifdef APP-PLUS
							uni.makePhoneCall({
								phoneNumber: phone
							});
							// #endif
						}
					}
				})
			}
		}
	}
</script>
<style>
	page,
	uni-page {
		height: 100%;
		background: rgba(249, 249, 249, 1);
	}
</style>
<style lang="scss" scoped>
	.page {
		height: 100%;
	}

	.list {
		.list_group {
			.list_item {
				background: rgba(255, 255, 255, 1);
				margin: 10rpx 0;
				.u-arrow-down-icon {
				    font-size: 24rpx;
				}

				.item_title {
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(50, 50, 50, 1);
					line-height: 40rpx;
				}

				.item_describe {
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(112, 121, 136, 1);
					margin-top: 10rpx;
					padding-bottom: 0rpx;
				}

				.u-tr {
					min-height: 90rpx;
					background: rgba(248, 249, 250, 1);
					padding-left: 30rpx;
				}

				.c_table_header {
					.u-td {
						font-size: 28rpx !important;
					}
				}

				.c_table_title {
					background: rgba(0, 0, 0, 0.04);
					height: 60rpx;

					.u-td {
						font-size: 26rpx !important;
						color: #B1B6BE !important;
					}
				}

				.c_table_body {
					border-bottom: 1rpx solid #ECEEF1;

					.u-td {
						font-size: 28rpx !important;
					}
				}

				.c_table_body:nth-last-child(1) {
					border-bottom: 0;
				}
			}
		}
	}
</style>

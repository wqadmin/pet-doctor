<template>
	<view class="page">
		<view class="c_table">
			<view class="c_table_top">
				<text>排班表（4月6日-4月12日）</text>
			</view>
			<u-table padding="30rpx 0" bgColor="#FFFFFF" borderColor="#CBD0D7">
				<u-tr class="c_table_title">
					<u-td width="25%" style="font-weight:500;color: #323232;">排班表</u-td>
					<u-td style="color: #707988;">周一</u-td>
					<u-td style="color: #707988;">周二</u-td>
					<u-td style="color: #707988;">周三</u-td>
					<u-td style="color: #707988;">周四</u-td>
					<u-td style="color: #707988;">周五</u-td>
					<u-td style="color: #707988;">周六</u-td>
					<u-td style="color: #707988;">周日</u-td>
				</u-tr>
				<u-tr class="c_table_body" v-for="item in list" :key="item.id">
					<u-td width="25%">{{item.title}}<br />{{item.time}}</u-td>
					<u-td v-for="(weekDay, index) in item.week" :key="index">
						<u-icon v-show="weekDay.isTrue" :label="weekDay.isToday?'今日':''" label-pos="bottom" label-color="#00AEA5"
						 label-size="22" name="checkbox-mark" color="#00AEA5" size="40"></u-icon>
					</u-td>
				</u-tr>
			</u-table>
		</view>
		<!-- <u-row gutter="60">
			<u-col span="6">
				<text style="color: #323232;font-size: 32rpx;font-weight: 500;">打卡统计</text>
			</u-col>
			<u-col span="5" offset="1">
				<u-input v-model="value" type="select" style="background-color: #F6F8FB;padding: 0 20rpx;" :border="false" @click="show = true" />
				<u-select v-model="show" :default-value="defaultValue" :list="list" @confirm="confirm"></u-select>
			</u-col>
		</u-row>
		<view style="text-align: center;margin-top: 50rpx;">
			<u-circle-progress style="margin: auto;" width="440" border-width="20" active-color="#00AEA5" :percent="percent">
				<view style="width: 320rpx;">
					<u-row gutter="10" style="text-align: center;font-size: 88rpx;color: #3B3C3E;font-weight: 500;">
						<u-col span="5">
							<text>20</text>
						</u-col>
						<u-col span="2">
							<text style="font-weight: 300;">/</text>
						</u-col>
						<u-col span="5">
							<text>30</text>
						</u-col>
					</u-row>
					<u-row gutter="0" style="text-align: center;font-size: 26rpx;color: #707988;">
						<u-col span="5">
							<text>打卡次数</text>
						</u-col>
						<u-col span="2">
						</u-col>
						<u-col span="5">
							<text>应打次数</text>
						</u-col>
					</u-row>
				</view>
			</u-circle-progress>
			<u-row gutter="0" style="text-align: center;font-size: 58rpx;color: #323232;font-weight: 600;margin-top: 40rpx;">
				<u-col span="4">
					<text>4</text>
				</u-col>
				<u-col span="4">
					<text>3</text>
				</u-col>
				<u-col span="4">
					<text>14</text>
				</u-col>
			</u-row>
			<u-row gutter="0" style="text-align: center;font-size: 26rpx;color: #707988;padding-bottom: 50rpx;">
				<u-col span="4">
					<text>未打卡</text>
				</u-col>
				<u-col span="4">
					<text>迟到</text>
				</u-col>
				<u-col span="4">
					<text>外勤</text>
				</u-col>
			</u-row>
		</view>
		<u-toast ref="uToast" /> -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: '0',
					title: '早班',
					time: '8:00~14:00',
					week: [{
						isTrue: true,
						isToday: false
					}, {
						isTrue: true,
						isToday: true
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}]
				}, {
					id: '1',
					title: '中班',
					time: '8:00~14:00',
					week: [{
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: true,
						isToday: false
					}, {
						isTrue: true,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}]
				}, {
					id: '2',
					title: '晚班',
					time: '8:00~14:00',
					week: [{
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: true,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}]
				}, {
					id: '3',
					title: '夜班',
					time: '8:00~14:00',
					week: [{
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: false,
						isToday: false
					}, {
						isTrue: true,
						isToday: false
					}, {
						isTrue: true,
						isToday: false
					}]
				}],
				value: '2019年6月',
				show: false,

				// list: [{
				// 		value: 0,
				// 		label: '2019年7月'
				// 	},
				// 	{
				// 		value: 1,
				// 		label: '2019年6月'
				// 	},
				// 	{
				// 		value: 2,
				// 		label: '2019年5月'
				// 	}
				// ],
				defaultValue: [1],
				percent: 20 / 30 * 100
			}
		},
		onLoad() {},
		onShow() {
			setTimeout(() => {
				this.percent = 20 / 30 * 100
			}, 2000)
		},
		onPullDownRefresh() {},
		onPageScroll(options) {
			if (options.scrollTop > 60) {} else {}
		},
		methods: {
			confirm(e) {
				console.log(e)
				this.value = e[0].label
				this.defaultValue = [e[0].value]
			},
			onSearch() {
				if (!this.dateValue) {
					this.$refs.uToast.show({
						title: '请选择时间',
						type: 'warning',
					})
				} else {

				}
			},
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
	}

	.c_table {
		padding: 30rpx;

		.c_table_top {
			padding: 0 0 20rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: rgba(50, 50, 50, 1);
		}

		.c_table_header {
			height: 80rpx;
			background: rgba(248, 249, 250, 1);

			.u-td {
				font-size: 28rpx !important;
			}
		}

		.c_table_title {
			height: 80rpx;
			background: rgba(248, 249, 250, 1);

			.u-td {
				font-size: 26rpx !important;
				color: rgba(112, 121, 136, 1);
			}
		}

		.c_table_body {
			height: 100rpx;

			.u-td {
				font-size: 26rpx !important;
				padding: 0 !important;
				color: rgba(112, 121, 136, 1);
			}
		}

		.c_table_body:nth-last-child(1) {
			border-bottom: 0;
		}
	}
</style>

<template>
	<view class="page">
		<view class="list">
			<u-cell-group :border="false" class="list_group">
				<u-cell-item :center="false" :arrow="false" :border-bottom="false" hover-class="none" value="¥546.00" :value-style="valueStyle"
				 class="list_item">
					<view slot="title" class="list_item_title">消费总额</view>
					<view slot="label" class="list_item_label">
						<text>2020-03-23 19:00:09（周二） 宠物：乐乐</text>
					</view>
				</u-cell-item>
			</u-cell-group>
			<view class="c_table_wrap" v-for="item in 2" :key="item">
				<text>2020-03-23 19:00:09（周二）</text>
				<view class="c_table" v-for="item in 2" :key="item">
					<u-table padding="30rpx 0" bgColor="rgba(248,249,250,1)" borderColor="rgba(0,0,0,0)">
						<u-tr class="c_table_title">
							<u-td width="40%" style="text-align: left;">处方类消费</u-td>
							<u-td>结果</u-td>
							<u-td>折后单价</u-td>
							<u-td>实付总价</u-td>
						</u-tr>
						<u-tr class="c_table_body">
							<u-td width="40%" style="text-align: left;">血液常规检测</u-td>
							<u-td>1</u-td>
							<u-td>¥40</u-td>
							<u-td>¥40</u-td>
						</u-tr>
						<u-tr class="c_table_body">
							<u-td width="40%" style="text-align: left;">埋留置针</u-td>
							<u-td>1</u-td>
							<u-td>¥40</u-td>
							<u-td>¥40</u-td>
						</u-tr>
					</u-table>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				valueStyle: {
					'font-size': '28rpx',
					'font-weight': '500',
					color: '#323232'
				}
			}
		},
		onLoad() {},
		onShow() {},
		onPullDownRefresh() {},
		onPageScroll(options) {
			if (options.scrollTop > 60) {} else {}
		},
		methods: {}
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
			padding: 30rpx;
			background: rgba(255, 255, 255, 1);
			margin: 20rpx 0;

			.list_item {
				width: 100%;
				padding: 0;

				.list_item_title {
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(50, 50, 50, 1);
				}

				.list_item_label {
					width: 100%;
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(112, 121, 136, 1);
					line-height: 33rpx;
				}

				.list_item_right {
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(0, 174, 165, 1);
				}
			}
		}
	}

	.c_table_wrap {
		text {
			display: block;
			width: 100%;
			line-height: 80rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(112, 121, 136, 1);
			background-color: #FFFFFF;
			padding-left: 30rpx;
		}

		.c_table {
			background: rgba(255, 255, 255, 1);

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
			}
			.c_table_body:nth-last-child(1) {
				border-bottom: 0;
			}
		}
	}
</style>

<template>
	<view class="page">
		<view style="padding: 10rpx 30rpx;background-color: #FFFFFF;">
			<u-search @search="onSearch" :show-action="false" placeholder="顾客手机号/宠物名称/顾客名字" v-model="keyword"></u-search>
		</view>
		<view class="list">
			<u-collapse class="list_group" :head-style="headerStyle">
				<u-collapse-item v-for="(item, index) in itemList" :key="index" class="list_item">
					<view style="width: inherit;" slot="title">
						<view class="list_item_title">
							<text>{{item.head}}</text>
							<text class="list_item_title_right">{{item.time}}</text>
						</view>
					</view>
					<view class="">
						<u-table padding="30rpx 0" bgColor="rgba(248,249,250,1)" borderColor="rgba(0,0,0,0)">
							<u-tr class="c_table_header">
								<u-td>尿成渣检测单</u-td>
							</u-tr>
							<u-tr class="c_table_title">
								<u-td width="40%" style="text-align: left;">指标</u-td>
								<u-td>结果</u-td>
								<u-td>单位</u-td>
								<u-td>参考范围</u-td>
							</u-tr>
							<u-tr class="c_table_body">
								<u-td width="40%" style="text-align: left;">单核细胞百分比</u-td>
								<u-td>5↓</u-td>
								<u-td>%</u-td>
								<u-td>2-9</u-td>
							</u-tr>
							<u-tr class="c_table_body">
								<u-td width="40%" style="text-align: left;">中性粒细胞数目</u-td>
								<u-td>5↓</u-td>
								<u-td>-</u-td>
								<u-td>2-12.6</u-td>
							</u-tr>
						</u-table>
					</view>
				</u-collapse-item>
			</u-collapse>
			<u-empty :show="itemList.length<=0" style="margin-top: 100rpx;" mode="search"></u-empty>
		</view>
		<u-toast ref="uToast" />
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				itemList: [{
					head: "尿结石（丹丹）",
					time: '2020-02-02',
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					disabled: true
				}, {
					head: "尿结石（豆豆）",
					time: '2020-02-02',
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					open: false,
				}, {
					head: "尿结石（花花）",
					time: '2020-02-02',
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
					open: false,
				}],
				headerStyle: {
					width: '100%',
					height: '88rpx',
					'padding': '0 10rpx 0 30rpx',
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
			onSearch(e) {
				console.log(e)
				this.$refs.uToast.show({
					title: e,
					type: 'success',
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

				.list_item_title {
					display: flex;
					justify-content: space-between;
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(50, 50, 50, 1);
				}

				.list_item_title_right {
					color: rgba(112, 121, 136, 1);
					font-weight: 400;
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
					font-size: 28rpx !important;
					border-bottom: 1rpx solid #ECEEF1;
				}

				.c_table_body:nth-last-child(1) {
					border-bottom: 0;
				}
			}
		}
	}
</style>

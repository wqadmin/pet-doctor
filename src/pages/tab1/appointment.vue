<template>
	<view class="page">
		<view class="list">
			<u-cell-group :border="false" class="list_group">
				<u-cell-item :center="true" :arrow="false" hover-class="none" class="list_item">
					<view slot="title" class="list_item_title">医院</view>
					<view slot="right-icon" @click="showHospital = true" class="list_item_right" :class="hospitalValue?'list_item_right_active':''">
						<text>{{hospitalValue?hospitalValue:'请选择就诊医院'}}</text>
						<u-icon name="arrow-right" style="margin-left: 30rpx;" color="#B1B6BE" size="28"></u-icon>
					</view>
				</u-cell-item>
				<u-cell-item :center="true" :arrow="false" hover-class="none" class="list_item">
					<view slot="title" class="list_item_title">预约宠物</view>
					<view slot="right-icon" @click="showPet = true" class="list_item_right" :class="petValue?'list_item_right_active':''">
						<text>{{petValue?petValue:'请选择宠物'}}</text>
						<u-icon name="arrow-right" style="margin-left: 30rpx;" color="#B1B6BE" size="28"></u-icon>
					</view>
				</u-cell-item>
				<u-cell-item :center="true" :arrow="false" hover-class="none" class="list_item">
					<view slot="title" class="list_item_title">服务选择</view>
					<view slot="right-icon" @click="showServe = true" class="list_item_right" :class="serveValue?'list_item_right_active':''">
						<text>{{serveValue?serveValue:'请选择服务类型'}}</text>
						<u-icon name="arrow-right" style="margin-left: 30rpx;" color="#B1B6BE" size="28"></u-icon>
					</view>
				</u-cell-item>
				<u-cell-item :center="true" :arrow="false" hover-class="none" class="list_item">
					<view slot="title" class="list_item_title">期望时间</view>
					<view slot="right-icon" @click="showTime = true" class="list_item_right" :class="timeValue?'list_item_right_active':''">
						<text>{{timeValue?timeValue:'请选择预约时间'}}</text>
						<u-icon name="arrow-right" style="margin-left: 30rpx;" color="#B1B6BE" size="28"></u-icon>
					</view>
				</u-cell-item>
				<u-cell-item :center="true" :border-bottom="false" :arrow="false" hover-class="none" class="list_item">
					<view slot="title" class="list_item_title">备注</view>
					<view slot="right-icon" class="list_item_right input_textarea" :class="markValue?'list_item_right_active':''">
						<u-input v-model="markValue" style="min-width: 400rpx;text-align: justify;" type="textarea" input-align="right"
						 placeholder="请输入您的特殊要求，医务人员是可以看的哦" placeholderStyle="color:#b1b6be" :border="false" :height="80" />
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="">
			<u-select @confirm="onHospital" v-model="showHospital" :list="hospitalList" title="选择就诊医院" confirm-color="#00AEA5"
			 :safe-area-inset-bottom="true"></u-select>
		</view>
		<view class="">
			<u-select @confirm="onPet" v-model="showPet" :list="petList" title="选择宠物" confirm-color="#00AEA5"
			 :safe-area-inset-bottom="true"></u-select>
		</view>
		<view class="">
			<u-action-sheet @click="onServe" :list="list" :safe-area-inset-bottom="true" confirm-color="#00AEA5" v-model="showServe"></u-action-sheet>
		</view>
		<view class="">
			<u-picker mode="time" @confirm="onTime" v-model="showTime" :params="params" title="预约时间" :safe-area-inset-bottom="true"
			 confirm-color="#00AEA5"></u-picker>
		</view>
		<u-toast ref="uToast" />
		<view class="custom_button">
			<u-button @click="onNow" type="primary" style="height: 100%;line-height: 100%;border-radius: 0;" :ripple="true"
			 shape="square">
				<text>立即预约</text>
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hospitalList: [{
						value: '1',
						label: '上海医院'
					},
					{
						value: '2',
						label: '北京医院'
					}
				],
				showHospital: false,
				hospitalValue: '',
				petList: [{
						value: '1',
						label: '贝贝'
					},
					{
						value: '2',
						label: '瑞哥'
					}
				],
				showPet: false,
				petValue: '',
				list: [{
					text: '门诊预约',
					color: '#323232',
					fontSize: 30
				}, {
					text: '美容造型',
					color: '#323232',
					fontSize: 30
				}, {
					text: '洗澡类',
					color: '#323232',
					fontSize: 30
				}, {
					text: '局部剪毛',
					color: '#323232',
					fontSize: 30
				}, {
					text: '其他服务',
					color: '#323232',
					fontSize: 30
				}],
				showServe: false,
				serveValue: '',
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				showTime: false,
				timeValue: '',
				markValue: ''
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
			onHospital(e) {
				console.log(e)
				this.hospitalValue = e[0].label
			},
			onPet(e) {
				console.log(e)
				this.petValue = e[0].label
			},
			onServe(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				this.serveValue = this.list[index].text
			},
			onTime(e) {
				console.log(e)
				this.timeValue = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`
			},
			onNow() {
				if (!this.hospitalValue) {
					this.$refs.uToast.show({
						title: '请选择就诊医院',
						type: 'warning',
					})
				} else if (!this.petValue) {
					this.$refs.uToast.show({
						title: '请选择宠物',
						type: 'warning',
					})
				} else if (!this.serveValue) {
					this.$refs.uToast.show({
						title: '请选择服务类型',
						type: 'warning',
					})
				} else if (!this.timeValue) {
					this.$refs.uToast.show({
						title: '请选择预约时间',
						type: 'warning',
					})
				} else {

				}
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
		margin: 20rpx 0;

		.list_group {
			padding: 30rpx;
			background: rgba(255, 255, 255, 1);

			.list_item {
				width: 100%;
				min-height: 108rpx;
				padding: 0;

				.list_item_title {
					font-size: 28rpx;
					font-weight: 400;
					color: rgba(112, 121, 136, 1);
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
					font-weight: 400;
					color: rgba(177, 182, 190, 1);
					letter-spacing: 1rpx;
				}

				.list_item_right_active {
					color: rgba(50, 50, 50, 1);
				}

				.input_textarea {
					.u-input__textarea {
						margin: 0;
					}
				}
			}
		}
	}

	.custom_button {
		width: 100%;
		height: 110rpx;
		margin-top: 40rpx;
	}
</style>

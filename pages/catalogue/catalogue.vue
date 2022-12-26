<template>
	<view>
		<view style="margin-top: 20px;" @click="back()">
			<img src="static/catalogue/arrow.png" alt=""
			style="width: 40rpx;height: 40rpx;top: 30rpx;position: relative;left:20rpx">
			<view style="margin-left: 20px;position: relative;top: -22rpx;left: 10rpx;
			font-size: 15px;">编目</view>
		</view>
		<view style="background: white;height: 110px;">
			<view style="width: 100px;height:20px;margin-left: 27px;font-size: 18px;position: relative;top: 14px;">选择类型</view>
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
		</view>
		<view class="content">
			<view v-if="current === 0">
				<catalogueone></catalogueone>
			</view>
			<view v-if="current === 1"><cataloguetwo></cataloguetwo></view>
			<view v-if="current === 2"><cataloguethree></cataloguethree></view>
		</view>
	</view>
</template>
<script>
	import catalogueone from "../../components/catalogue-1/catalogueone.vue"
	import cataloguetwo from "../../components/catalogue-1/cataloguetwo.vue"
	import cataloguethree from "../../components/catalogue-1/cataloguethree.vue"
	export default {
		components: {
			catalogueone,cataloguetwo,cataloguethree
		},
		data() {
			return {
				items: ['音频', '视频', '文章'],
				fileList1: [],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			back() {
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			},
		}
	}
</script>
<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		text-align: center;
	}

	.content-text {
		font-size: 14px;
		color: #666;
	}

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.uni-list {
		flex: 1;
	}

	.uni-list-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}


	.uni-list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
	}

	.uni-list-item__content-title {
		font-size: 14px;
	}
	
</style>

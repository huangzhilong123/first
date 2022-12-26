<template>
	<u-popup :show="show" :round="10" mode="top" @close="close" @open="open">
		<view class="selectbottom">
			<view>模糊查询</view>
			<u--input placeholder="请输入内容" border="surround" v-model="value" @change="change"
				style="background: #F2F3F3;width: 85%;"></u--input>
			<view>创建时间区间</view>
			<view class="time-line" style="margin-left: 194px;margin-top: 26px;"></view>
			<u--input placeholder="开始时间" border="surround" v-model="value1" @change="change"
				style="background: #F2F3F3;width: 35%;" @focus="click()">
			</u--input>
			<u-calendar :show="show1" :mode="mode" @confirm="confirm"></u-calendar>
			<u--input placeholder="结束时间" border="surround" v-model="value2" @change="change"
				style="background: #F2F3F3;width: 35%;float: right;margin-top: -46px;margin-right: 30px;"
				@focus="click1()"></u--input>
			<u-calendar :show="show2" :mode="mode" @confirm="confirm1"></u-calendar>
			<view style="margin-top: -10px;">状态</view>
			<uni-data-select class="selectData" v-model="value3" :localdata="range" @change="change1"></uni-data-select>
			<view>媒资来源</view>
			<uni-data-select class="selectData" v-model="value3" :localdata="range" @change="change1"></uni-data-select>
			<view>内容提供商</view>
			<uni-data-select class="selectData" v-model="value3" :localdata="range" @change="change1"></uni-data-select>
			<view>业务分类</view>
			<uni-data-select class="selectData" v-model="value3" :localdata="range" @change="change1"></uni-data-select>
			<view>运营分区</view>
			<uni-data-select class="selectData" v-model="value3" :localdata="range" @change="change1"></uni-data-select>
			<button class="confirm">确定</button>
			<button class="cancel">取消</button>
		</view>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				issue: "筛选",
				show: false,
				mode: 'single',
				range: [{
						value: 0,
						text: "篮球"
					},
					{
						value: 1,
						text: "足球"
					},
					{
						value: 2,
						text: "游泳"
					},
				],
			
			}
		},
		methods: {
			open() {
	
			},
			change1(e) {
				console.log(e)
			},
			close() {
				this.show = false
			},
			click() {
				this.show1 = true;
			},
			click1() {
				this.show2 = true;
			},
			change(e) {
				console.log('change', e);
			},
			confirm(e) {
				console.log(e);
				this.value1 = e[0];
				this.show1 = false;
	
			},
	
			confirm1(e) {
				console.log(e);
				this.value2 = e[0];
				this.show2 = false
				var date1 = new Date(this.value1);
				var date2 = new Date(this.value2);
				if (date1 >= date2) {
					this.show2 = true;
					this.value2 = "";
					uni.showToast({
						title: "请输入正确日期",
						duration: 2000,
					})
				} else {
					this.show2 = false;
					this.value2 = e[0];
				}
			},
			bottomSelect() {
				this.show = true
			},
			close1() {
				this.show1 = false
			},
		}
	}
</script>
<style lang="scss">
	.content {
		width: 110%;
		height: 100px;
		margin: 0 auto;
		border: 1px solid #C0C0C0;
		line-height: 100px;
		text-align: center;
	}
	.confirm{
		background: #315EE7;
		width: 35%;
		color: white;
		height: 35px;
		margin-left: 15px;
		line-height: 35px;
		margin-top: 40px;
	}
	.cancel{
		height: 35px;
		line-height: 35px;
		background: #999999;
		width: 35%;
		color: white;
		float: right;
		margin-left: 15px;
		margin-top: -35px;
		margin-right: 30px;
	}
	.selectData{
		width: 90%;
		background: #F2F3F3;
	}
	.top {
		width: 100%;
		height: 50px;
		background: white;
	}
	
	.time-line {
		width: 10px;
		height: 3px;
		background: black;
		position: absolute;
	}
	
	.selectbottom {
		width: 100%;
		height: 650px;
		background: white;
		border-radius: 0px 0px 100px 100px;
	}
	
	.line {
		width: 32%;
		height: 1px;
		background: #D5D6D6;
		margin-top: 11px;
		position: absolute;
		margin-left: 11px;
	}
	
	.selectbottom view {
		margin-left: 15px;
		margin-top: 10px;
	}
	
	.line-word {
		margin-left: 153px;
		margin-top: 30px;
		color: #D5D6D6;
	}
	.pop {
		width: 100%;
		height: 100px;
	}
	
	.pop checkbox {
		border-radius: 12px;
		margin-left: 10px;
		margin-top: 35px;
		position: absolute;
	}
	
	.pop text {
		margin-left: 10px;
		margin-top: 60px;
		position: absolute;
	}
	
	.pop-btn {
		width: 280px;
		line-height: 40px;
		height: 40px;
		background: cornflowerblue;
		margin-top: 35px;
		margin-left: 105px;
	}
	.getall{
		position: absolute;
		margin-top: 30px;
		margin-left: 30px;
	}
	.multiselect {
		position: absolute;
		margin-top: 25px;
		margin-left: 10px;
	}
	
	
	.checkbox {
		margin-left: 15px;
		margin-top: 10px;
		position: absolute;
	}
	
	.leftselect {
		float: left;
		position: absolute;
		left: 10px;
		width: 50px;
		height: 50px;
		display: block;
	}
</style>
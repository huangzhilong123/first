<template>
	<view>
		<view class="content">
			<!-- <radio class="leftselect" :style="{display:display}" @click="selectAll()"></radio> -->
			<view class="move">
				<img :src=data.url style="20px;float: left;margin-top: 20px;
	margin-left:20px" alt="">
				<view style="margin-top:-20px;margin-left: 90px;position: absolute;">{{data.title}}</view>
				<view style="margin-top:10px;margin-left: 90px;position: absolute;color: #BEBFC3;">{{data.date}}
				</view>
			</view>
			<view style="margin-top:-25px;margin-left: 280px;position: absolute;color: #BEBFC3;">{{data.person}}
			</view>
			<view v-bind:style="{marginTop:'9px',marginLeft: '280px',position:'absolute',color:data.color}">
				{{data.info}}
			</view>
		</view>
		<!-- 步骤条 -->
		<view class="center">
		<view class="bigCircle" style="margin-top: -20px;">审
		<view style="margin-top: -20px;">审核</view></view>
		<view class="line" style="margin-top: 190px;"></view>
		<view class="smallCircle" style="margin-top: -18px;">
			<view style="width: 300px;height: 20px;
			margin-left: -13px;margin-top: -4px;">发起审核    2022-03-21  11:00:00</view>
		</view>
		<view class="line" style="margin-top:150px;"></view>
		<view class="smallCircle" style="margin-top: -50px;">
			<view style="width: 300px;height: 20px;
			margin-left: -13px;margin-top: -4px;">审核通过    2022-03-21  11:00:00</view>
		</view>
		<view class="line" style="margin-top: 98px;"></view>
		<view class="bigCircle" style="margin-top: -160px;">转
		<view style="margin-top: -20px;">转码</view></view>
		<view class="line" style="margin-top:118px;"></view>
		<view class="smallCircle" style="margin-top: -150px;">
			<view style="margin-left: 30px;margin-top: -3px;">转码中    2022-03-21  11:00:00</view>
		</view>
		<view class="line" style="margin-top:58px;height: 20px;"></view>
		<img src="static/home/arrowtop.png" alt="" style="margin-top: 30px;position: absolute;width: 20px;margin-left: 25px;">
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function(options) {
			console.log('options', options)
			let test = JSON.parse(decodeURIComponent(options.data))
			console.log('test', test)
			this.data = test;
			console.log('this.data', this.data)
		},
		data() {
			return {
				data: {},
				
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

<style lang="scss">
.bigCircle{
	width: 20px;
	height: 20px;
	border-radius: 20px;
	text-align: center;
	color: white;
	line-height: 20px;
	background: #C4C4C4;
	position: absolute;
	top: 360px;
	left: 25px;
}

.smallCircle{
	width: 10px;
	height: 10px;
	border-radius: 10px;
	text-align: center;
	color: white;
	line-height: 20px;
	background: lawngreen;
	position: absolute;
	top: 320px;
	left: 30px;
	float:right;
	color: #BCF1C5;
}
.smallCircle view{
	color: lawngreen;
	width: 200px;
	margin-left: 37px;
}
.line{
	width: 1px;
	background-color: #C4C4C4;
	height: 30px;
	margin-left: 35px;
	margin-top: 200px;
	position: absolute;
}
.bigCircle view{
	color: #C4C4C4;
	margin-top:-30px;
	margin-left: 40px;
	width: 40px;
	height: 20px;
}
.center{
	background: white;
	width: 100%;
	height: 300px;
	margin-top: 20px;
}
	.content {
		width: 110%;
		height: 100px;
		margin: 0 auto;
		border: 1px solid white;
		line-height: 100px;
		background-color: white;
		text-align: center;
	}
</style>

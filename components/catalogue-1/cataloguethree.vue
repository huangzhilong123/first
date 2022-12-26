<template>
	<view class="center">
		<view class="word">基本信息</view>
		<view class="word" style="font-size: 13px;margin-top: 40px;margin-left: -65px;">标题</view>
		<uni-easyinput placeholder="请输入内容" style="width: 350px;margin-left: 20px;top: 30px;"></uni-easyinput>
		<view class="word" style="font-size: 13px;margin-top: 35px;margin-left: 26px;">描述</view>
		<textarea name="" id="" cols="30" rows="10" class="left-input"></textarea>
		<view class="bottom">
			<view>文章编辑</view>
			<uni-easyinput placeholder="请输入内容" style="width: 350px;margin-left: 20px;top: -10px;"></uni-easyinput>
			<rich></rich>
			<button>确定</button>
		</view>
	</view>
</template>

<script>
	import rich from "../../components/rich-text/rich.vue"
	export default {
		components: {
			rich
		},
		data() {
			return {
				value1: "",
			}
		}
	}
</script>

<style>
	.left-input{
		text-align: left;
		background: red;
		text-indent: 0em;
		margin-left: 20px;
		margin-top: 70px;
		width: 85%;
		background: #F2F3F3;
	}
	#editor{
		background: #F2F3F3;
		width:85%;
		margin-top: 65px;
		margin-left: 20px;
		position: absolute;
	}
	.center {
		height: 350px;
		background: white;
		width: 414px;
		position: relative;
		top: 125px;
	}

	button {
		background: #315EE7;
		position: relative;
		top: 250px;
		width: 90%;
		height: 40px;
		margin-left: 14px;
		color: white;
	}

	.word {
		float: left;
		margin-left: 20px;
		margin-top: 15px;
		font-size: 18px;
	}

	.bottom {
		width: 100%;
		height: 550px;
		background: white;
		margin-top: 75px;
		position: absolute;
	}

	.bottom view {
		font-size: 18px;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
	}
</style>

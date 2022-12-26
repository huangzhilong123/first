<template>
	<view class="center">
		<view class="word">基本信息</view>
		<view class="word" style="font-size: 13px;margin-top: 40px;margin-left: -65px;">标题</view>
		<uni-easyinput placeholder="请输入内容" style="width: 350px;margin-left: 20px;top: 30px;"></uni-easyinput>
		<view class="word" style="font-size: 13px;margin-top: 35px;margin-left: 26px;">描述</view>
		<view class="editor-wrapper">
			<editor id="editor" class="ql-container" placeholder="请输入描述" show-img-size show-img-toolbar
				show-img-resize @ready="onEditorReady">
			</editor>
		</view>
		<view class="bottom">
			<view>选择音视频链接</view>
			<img src="static/catalogue/add.png" style="width: 85%;margin-left: -10px;margin-top: 5px;" alt="">
			<img src="static/catalogue/queding.png" style="width: 85%;margin-left: -15px;" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
			}
		},
		methods:{
				onEditorReady() {
						    // #ifdef MP-BAIDU
						    this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
						    // #endif
						    
						    // #ifdef APP-PLUS || H5 ||MP-WEIXIN
						    uni.createSelectorQuery().select('#editor').context((res) => {
						      this.editorCtx = res.context
						    }).exec()
						    // #endif
						},
						undo() {
							this.editorCtx.undo()
						}
		}
	}
</script>

<style>
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

	.word {
		float: left;
		margin-left: 20px;
		margin-top: 15px;
		font-size: 18px;
	}
	.bottom{
		width: 100%;
		height: 200px;
		background: white;
		margin-top: 35px;
		position: absolute;
	}
	.bottom view{
		font-size: 18px;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
	}
</style>

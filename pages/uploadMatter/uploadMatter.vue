<template>
	<view class="main">
		<view class="toptitle">
			<img src="static/uploadMatter/close-l.png" alt="" @click="backhome">
			<view class="title">上传素材</view>
		</view>
		<swiper class="ct_tab">
			<swiper-item :class="{ 'ct_active': index == tabCur }" v-for="(item, index) in tabList" :key="index"
				class="ct_item" @click="clickCtTab(index)">
				<text v-text="item.title"></text>
			</swiper-item>
		</swiper>
		<view v-if="tabCur===0">
			<view class='research'>
				<input type="text" placeholder="请输入文件名称/标题">
			</view>
			<!-- <uni-file-picker limit="9" file-mediatype="all" class="upload"></uni-file-picker> -->
			<img src="static/home/upload.png" alt="" style="margin-top: 40px;margin-left: 40px;width: 330px;"
				@click="showShade">
			<view style="width: 100%;height: 570px;background: white;">
			</view>
			<u-overlay :show="show">
				<view class="form-main">
					<u-subsection :list="list" :current="curNow" @change="sectionChange">
					</u-subsection>
					<view v-if="curNow==0">
						<view class="videotitle">
							<view>视频标题</view>
							<input type="text">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view style="width: 70px;">视频ID</view>
							<input type="text" style="width: 10%;">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view>总集数</view>
							<input type="text" style="width: 72%;">
						</view>
						<view class="videotitle" style="width: 90%;margin-left:10px">
							<view>集序号</view>
							<input type="text" style="width: 15%;">
						</view>
						<view class="videotitle">
							<view>描述</view>
							<input type="text">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">栏目标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">查询范围标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<view class="up-page">
							<!--图片-->
							
							<!--视频-->
								<view class="show-box" v-for="(item1, index1) in videoList" :key="index1">
									<video class="full" controls id="videoid" :src="item1" @tap="previewVideo(item1)" @play="play"
										@fullscreenchange="fullscreenchange"></video>
									<view class="delect-icon" @tap="delectVideo(index1)">
										<image class="full" :src="clearIcon" mode=""></image>
									</view>
								</view>
								<view v-if="VideoOfImagesShow" @tap="chooseVideo()" class="box-mode">
									<image class="full" :src="selectfile" mode="" style="width: 50px;height: 50px;"></image>
									<!-- 上传图标 懒得写，整个的图 -->
								</view>
							<button>提交</button>
						</view>
					</view>
					<view v-if="curNow==1">
						<view class="videotitle">
							<view>图片名称</view>
							<input type="text">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view style="width: 70px;">图片组ID</view>
							<input type="text" style="width: 10%;">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view>总图片数</view>
							<input type="text" style="width: 72%;">
						</view>
						<view class="videotitle" style="width: 90%;margin-left:10px">
							<view>图片序号</view>
							<input type="text" style="width: 72%;">
						</view>
						<view class="videotitle">
							<view>描述信息</view>
							<input type="text">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">分类标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">查询范围标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<view class="up-page">
							<!--图片-->
							<view class="show-box" v-for="(item,index) in imageList" :key="index">
								<image class="full" :src="item" :data-src="image" @tap="previewImage(item)">
								</image>
								<view class="delect-icon" @tap="delect(index)">
									<image class="full" :src="clearIcon" mode=""></image>
									<!--图片或者视频上传成功了，点击右上角叉号-->
								</view>
							</view>
							<!--视频-->
							
								<view v-if="VideoOfImagesShow" @tap="chooseImages()" class="box-mode">
									<image class="full" :src="selectfile" mode="" style="width: 50px;height: 50px;"></image>
									<!-- 上传图标 懒得写，整个的图 -->
								</view>
							<button>提交</button>
						</view>
						<!-- <view class="example-body">
							<u-upload :fileList="fileList2" @afterRead="afterRead" @delete="deletePic" name="1" multiple
								:maxCount="10"></u-upload>
						</view> -->
					</view>
					<view v-if="curNow==2">
						<view class="videotitle">
							<view>音频名称</view>
							<input type="text">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view style="width: 70px;">音频组ID</view>
							<input type="text" style="width: 70%;">
						</view>
						<view class="videotitle" style="width: 90%;">
							<view>总音频数</view>
							<input type="text" style="width: 72%;">
						</view>
						<view class="videotitle" style="width: 90%;margin-left:10px">
							<view>音频序号</view>
							<input type="text" style="width: 72%;">
						</view>
						<view class="videotitle">
							<view>描述信息</view>
							<input type="text">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">栏目标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<view style="margin-top: 10px;margin-left: 10px;">查询范围标签</view>
						<view>
							<input type="text"
								style="width: 90%;border:1px solid #E9ECEF;margin-left: 10px;margin-top: 4px;height: 30px;">
						</view>
						<!-- 	<view class="example-body">
							<uni-file-picker v-model="imageValue" fileMediatype="all" mode="grid" @select="select"
								@progress="progress" @success="success" @fail="fail" />
						</view> -->
					</view>
				</view>
			</u-overlay>
		</view>

		<view v-if="tabCur===1">
			<view>已上传</view>
		</view>
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	];
	export default {
		data() {
			return {
				tabCur: 0,
				tabList: [{
					title: '本次上传',
				}, {
					title: '已上传',
				}],
				imageValue: [],
				show: false,
				list: ['上传视频媒体文件', '上传图片文件', '上传音频文件'],
				curNow: 0,
				fileList1: [],
				fileList2: [],
				fileList3: [],
				/* 表单 */
				/* 上传视频 */
				image: "",
				// 图标
				clearIcon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDE2YTQgNCAwIDAgMSA0IDR2MTZINGE0IDQgMCAwIDEtNC00VjB6IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9Ii45OCIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfYikiLz48cGF0aCBkPSJNMTAuOTQgOS45OTlsMi44NjMtMi44NTdhLjY2OS42NjkgMCAxIDAtLjk0Ni0uOTQ2TDEwIDkuMDYgNy4xNDMgNi4xOTZhLjY2OS42NjkgMCAwIDAtLjk0Ni45NDZsMi44NjQgMi44NTctMi44NjQgMi44NTdhLjY2Ni42NjYgMCAwIDAgLjIxNyAxLjA5Mi42NjQuNjY0IDAgMCAwIC43MjktLjE0NkwxMCAxMC45MzhsMi44NTcgMi44NjRhLjY2Ny42NjcgMCAwIDAgMS4wOTItLjIxNy42NjYuNjY2IDAgMCAwLS4xNDYtLjcyOUwxMC45MzkgMTB6IiBmaWxsPSIjZmZmIi8+PGRlZnM+PGZpbHRlciBpZD0iZmlsdGVyMF9iIiB4PSItNCIgeT0iLTQiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlR2F1c3NpYW5CbHVyIGluPSJCYWNrZ3JvdW5kSW1hZ2UiIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1ciIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfYmFja2dyb3VuZEJsdXIiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyMCIgeDI9IjE1LjU4NiIgeTI9IjIyLjk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzBEMUUyOCIgc3RvcC1vcGFjaXR5PSIuOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1MEUxMiIgc3RvcC1vcGFjaXR5PSIuNjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=',
				selectfile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIuMjUiIHk9Ii4yNSIgd2lkdGg9IjYzLjUiIGhlaWdodD0iNjMuNSIgcng9IjMuNzUiIGZpbGw9IiNGMkYyRjIiIHN0cm9rZT0iI0YyRjJGMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxyZWN0IHg9IjE2IiB5PSIzMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjQkZCRkJGIi8+PHJlY3QgeD0iMzMiIHk9IjE2IiB3aWR0aD0iMzIiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDMzIDE2KSIgZmlsbD0iI0JGQkZCRiIvPjwvc3ZnPg==',
				VideoOfImagesShow: true, // 页面图片或视频数量超出后，拍照按钮隐藏
				imageList: [], //存放图片的地址
				videoList: [], //视频存放的地址
				sourceType: ['拍摄', '相册', '拍摄或相册'],
				sourceTypeIndex: 2,
				cameraList: [{
					value: 'back',
					name: '后置摄像头',
					checked: 'true'
				}, {
					value: 'front',
					name: '前置摄像头'
				}],
				cameraIndex: 0, //上传视频时的数量
				maxCount: 8 //图片和视频允许上传的总数
			}
		},
		onUnload() {
			(this.imageList = []), (this.sourceTypeIndex = 2), (this.sourceType = ['拍摄', '相册', '拍摄或相册']);
		},
		methods: {
			clickCtTab(ctCur) {
				this.tabCur = ctCur
				console.log('点击了--->' + this.tabCur)
			},
			sectionChange(index) {
				console.log('index', index)
				this.curNow = index;
			},
			stopTouchMove() {
				return false
			},
			backhome() {
				console.log('12311')
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			showShade() {
				this.show = true
			},
			//点击上传图片或视频
			chooseVideoImage() {
				uni.showActionSheet({
					title: '选择上传类型',
					itemList: ['图片', '视频'],
					success: res => {
						console.log(res);
						if (res.tapIndex == 0) {
							this.chooseImages();
						} else {
							this.chooseVideo();
						}
					}
				});
			},
			play(index) {
				console.log('1231311111')
				let videoContext = uni.createVideoContext("videoid", this);
				videoContext.requestFullScreen()
			},
			fullscreenchange(e) {
				console.log("e.detail.fullScreen",e.detail.fullScreen);
				if (!e.detail.fullScreen) {
					console.log('123123HHH')
					uni.createVideoContext("videoid", this).pause;
				}
			},
			// fullscreenchange(e) {
			// 	console.log('111222333')
			// 	if (!e.detail.fullScreen) {
			// 		this.videoContext.stop();
			// 	}
			// },
			//上传图片
			chooseImages() {
				uni.chooseImage({
					count: this.maxCount, //允许选择的数量
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						console.log("this.imageList", this.imageList)
						console.log(res)
						if (this.imageList.length + this.videoList.length == this.maxCount) {
							this.VideoOfImagesShow = false; //图片上传数量和count一样时，让点击拍照按钮消失
						}
					}
				})
			},
			//上传视频
			chooseVideo(index) {
				uni.chooseVideo({
					maxDuration: 60, //拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
					count: this.maxCount,
					camera: this.cameraList[this.cameraIndex].value, //'front'、'back'，默认'back'
					sourceType: sourceType[this.sourceTypeIndex],
					success: res => {
						this.videoList = this.videoList.concat(res.tempFilePath);
						if (this.imageList.length + this.videoList.length == this.maxCount) {
							this.VideoOfImagesShow = false;
						}
						console.log(this.videoList);
					}
				})
			},
			//预览图片
			previewImage: function(e) {
				console.log(e)
				uni.previewImage({
					current: e,
					urls: this.imageList
				});
			},
			previewVideo: function(e) {
				console.log('huangzhilfjejfie')


			},
			// 删除图片
			delect(index) {
				uni.showModal({
					title: '提示',
					content: '是否要删除该图片',
					success: res => {
						if (res.confirm) {
							this.imageList.splice(index, 1);
						}
						if (this.imageList.length + this.videoList.length == this.maxCount) {
							this.VideoOfImagesShow = false;
						} else {
							this.VideoOfImagesShow = true;
						}
					}
				});
			},
			// 删除视频
			delectVideo(index) {
				console.log('huanghzilong')
				uni.showModal({
					title: '提示',
					content: '是否要删除此视频',
					success: res => {
						if (res.confirm) {
							this.videoList.splice(index, 1);
						}
						if (this.imageList.length + this.videoList.length == this.maxCount) {
							this.VideoOfImagesShow = false;
						} else {
							this.VideoOfImagesShow = true;
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box-mode {
		width: 50px;
		height: 50px;
		// background: red;
		border-radius: 8rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		// overflow: hidden;
	}
	.full img{
		width: 25rpx;
		height: 25rpx;
		position: relative;
	}
	.bottom {
		width: 50px;
		height: 50px;
	}

	.full {
		width: 100%;
		height: 100%;
	}

	.up-page {
		display: flex;
		flex-wrap: wrap;
		display: flex;
		width: 100%;
		.show-box:nth-child(4n) {
			margin-right: 0;
			display: flex;
		}

		.show-box {
			position: relative;
			margin-bottom: 4vw;
			margin-right: 4vw;
			@extend .box-mode;

			.delect-icon {
				height: 40rpx;
				width: 40rpx;
				position: absolute;
				right: 0rpx;
				top: 0rpx;
				z-index:  !important;
			}
		}
	}

	/* 上传视频css */
	.example-body {
		margin-left: 35%;
		margin-top: 30px;
	}

	.videotitle {
		width: 90%;
		height: 30px;
		border: 1px solid #E9ECEF;
		border-radius: 10px;
		line-height: 30px;
		margin-left: 10px;
		margin-top: 10px;
	}

	.videotitle view {
		width: 70px;
		height: 30px;
		background: #E9ECEF;
		text-align: center;
	}

	.videotitle input {
		background: red;
		width: 60%;
		height: 30px;
		background: white;
		margin-left: 80px;
		margin-top: -30px;
	}

	.upload {
		margin-left: 40px;
		margin-top: 100px;
	}

	.form-main {
		width: 80%;
		height: 600px;
		background: white;
		margin-left: 10%;
		margin-top: 100px;
	}

	.form-title {}

	.toptitle {
		background: #F2F3F3;
		margin-top: 30px;
	}
	.toptitle img{
		width: 30px;
		height: 30px;
	}
	.research {
		margin-left: 40px;
		background: #F2F3F3;
		width: 80%;
		height: 40px;
		border-radius: 10px;
	}

	.research input {
		margin-top: 10px;
		position: absolute;
		margin-left: 20px;
	}

	.main {
		background: white;
		width: 100%;
		height: 100%;
	}

	.main img {
		margin-left: 10px;
	}

	.title {
		margin-left: 45px;
		position: absolute;
		margin-top: -35px;
		font-size: 20px;
	}

	.ct_tab {
		width: 100%;
		height: 100rpx;
		margin: 0 auto;
		/* padding: 30upx 0; */
		font-size: 26upx;
		font-weight: bold;
		color: #c0c8d0;
		white-space: nowrap;
		display: flex;
		margin-top: 0px;
		background-color: white;
		overflow: hidden;
	}

	button {
		background: skyblue;
		width: 50%;
		height: 30px;
		line-height: 30px;
		margin-top: 170px;
		margin-left: 60px;
		position: fixed;		
	}

	.ct_item {
		width: 200upx;
		padding: 0upx 10upx;
		margin-left: 100px;
		color: black;
		margin-top: 20upx;
		font-size: 30upx;
		display: inline-block;
	}

	.ct_item text {
		padding: 10upx 0;
	}

	.ct_active {
		color: #007AFF;
	}

	.ct_active text {
		border-bottom: 2px solid #007AFF;
	}

	swiper {
		width: 100%;
	}

	swiper-item {
		width: 230upx !important;
	}

	.formst {
		width: 80%;
		height: 500px;
		background: red;
	}
</style>

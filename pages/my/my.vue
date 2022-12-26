<template>
	<view>
		<!-- <uni-section class="my" title="我的"></uni-section> -->
		<view class="my">我的</view>
		<!-- tab部分 -->
		<swiper class="ct_tab">
			<swiper-item :class="{ 'ct_active': index == tabCur }" v-for="(item, index) in tabList" :key="index"
				class="ct_item" @click="clickCtTab(index)">
				<text v-text="item.title"></text>
			</swiper-item>
		</swiper>

		<!-- 内容信息 -->
		<view v-if="tabCur===0">
			<view style="width: 100%;height: 50px;background: white;">
				<view style="width: 90%;height: 32px;background:#F4F6F9;margin-left: 15px;
				margin-top: 7px;border-radius: 10px;position: absolute;">
					<input type="text" placeholder="请输入标题" style="width: 240px;
				margin-top: 5px;position:absolute;margin-left: 13px;background-color: #F4F6F9;
				font-size: 15px;">
					<img src="static/home/search.png" style="width: 36rpx;float: right;margin-right: 10px;
				margin-top: 6px;"></image>
				</view>
			</view>
			<view class="main">
				<view v-for="(item, index) in csListArrl" :key="index" :data-index="index" class="order-item"
					>
					<view class="content">
						<img :src=item.url style="20px;float: left;margin-top: 20px;
						margin-left:20px" alt="">
						<view style="margin-top:-20px;margin-left: 90px;position: absolute;">{{item.title}}</view>
						<view style="margin-top:10px;margin-left: 90px;position: absolute;color: #BEBFC3;">{{item.createTime}}
						</view>
						<view style="margin-top:-25px;margin-left: 280px;position: absolute;color: #BEBFC3;">
							{{item.person}}</view>
						<view style="margin-top:9px;margin-left: 280px;position: absolute;'color: #BEBFC3;'">
							{{item.info}}</view>
					</view>

				</view>
			</view>
		</view>
		<view v-if="tabCur===1">
			<view style="width: 100%;height: 50px;background: white;">
				<view style="width: 90%;height: 32px;background:#F4F6F9;margin-left: 15px;
				margin-top: 7px;border-radius: 10px;position: absolute;">
					<input type="text" placeholder="请输入标题" style="width: 240px;
				margin-top: 5px;position:absolute;margin-left: 13px;background-color: #F4F6F9;
				font-size: 15px;">
					<img src="static/home/search.png" style="width: 36rpx;float: right;margin-right: 10px;
				margin-top: 6px;"></image>
				</view>
			</view>
			<view class="main">
				<view v-for="(item, index) in csListArr2" :key="index" :data-index="index" class="order-item"
					>
					<view class="content">
						<img :src=item.url style="20px;float: left;margin-top: 20px;
						margin-left:20px" alt="">
						<view style="margin-top:-20px;margin-left: 90px;position: absolute;">{{item.title}}</view>
						<view style="margin-top:10px;margin-left: 90px;position: absolute;color: #BEBFC3;">{{item.finshedTime}}
						</view>
						<view style="margin-top:-25px;margin-left: 280px;position: absolute;color: #BEBFC3;">
							{{item.person}}</view>
						<view style="margin-top:9px;margin-left: 280px;position: absolute;'color: #BEBFC3;'">
							{{item.info}}</view>
					</view>

				</view>
			</view>
		</view>
		<uni-text data-v-662d25bf="" data-v-0de61367="" class="u-badge u-badge--not-dot u-badge--error"
			style="margin-left: 2px; user-select: auto;
			margin-top: 16px;"><span style="user-select: auto;">{{csListArr3.length}}</span></uni-text>
		<view v-if="tabCur===2">
			<view style="width: 100%;height: 50px;background: white;">
				<view style="width: 90%;height: 32px;background:#F4F6F9;margin-left: 15px;
				margin-top: 7px;border-radius: 10px;position: absolute;">
					<input type="text" placeholder="请输入标题" style="width: 240px;
				margin-top: 5px;position:absolute;margin-left: 13px;background-color: #F4F6F9;
				font-size: 15px;">
					<img src="static/home/search.png" style="width: 36rpx;float: right;margin-right: 10px;
				margin-top: 6px;"></image>
				</view>
			</view>
			<view class="main">
				<view v-for="(item, index) in csListArr3" :key="index" :data-index="index" class="order-item"
				>
					<view class="content">
						<img :src=item.url style="20px;float: left;margin-top: 20px;
						margin-left:20px" alt="">
						<view style="margin-top:-20px;margin-left: 90px;position: absolute;">{{item.title}}</view>
						<view style="margin-top:10px;margin-left: 90px;position: absolute;color: #BEBFC3;">{{item.createTime}}
						</view>
						<view style="margin-top:-25px;margin-left: 280px;position: absolute;color: #BEBFC3;">
							{{item.person}}</view>
						<view style="margin-top:9px;margin-left: 280px;position: absolute;'color: #BEBFC3;'">
							{{item.info}}</view>
					</view>

				</view>
			</view>
		</view>
		<view v-if="tabCur===3" class="listall">
			<uni-list v-for="(item,index) in info" :key="index" :data-index="index" class="list">
				<uni-list-item :title=item.name class="list_every"></uni-list-item>
				<view class="rightInfo">{{item.infomation}}</view>
			</uni-list>
		</view>
	</view>
</template>

<script>
	const lineBg =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
	export default {
		data() {
			return {
				tabCur: 0,
				info: [{
						name: '登录账号:',
						infomation: '84855463254'
					},
					{
						name: '运营商:',
						infomation: '四川广电'
					},
					{
						name: '运营分区:',
						infomation: '成都'
					},
					{
						name: '内容来源:',
						infomation: '自留地'
					},
					{
						name: '内容提供商:',
						infomation: '文化局'
					},
					{
						name: '业务分类:',
						infomation: '本地新闻'
					}
				],
				tabList: [{
					title: '我发起的',
				}, {
					title: '我审核的',
				}, {
					title: '审核任务',
				}, {
					title: '管理消息',
				}],
				csListArrl: [],
				csListArr2:[],
				csListArr3:[],
				//左滑默认宽度
				
			}
		},
		onLoad(){
			this.clickCtTab(1);
			this.clickCtTab(2)
			this.clickCtTab(0);
			
		},
		methods: {
			clickCtTab(ctCur) {
				this.tabCur = ctCur
				if (this.tabCur == 0) {
					this.$request({
						url: "/api/pgc/task/assetcheck/submited",
						method: "GET"
					}).then((res) => {
						this.csListArrl=res.data.data;
						console.log('this.csListArrl',this.csListArrl)
					})
				} else if (this.tabCur == 1) {
					this.$request({
						url: "/api/pgc/task/assetcheck/reacted",
						method: "GET"
					}).then((res) => {
						this.csListArr2 = res.data.data;
						console.log("this.csListArr2",this.csListArr2)
					})
				} else if(this.tabCur == 2){
					this.$request({
						url: '/api/pgc/task/assetcheck/waitreact',
						method: "GET"
					}).then((res) => {
						this.csListArr3 = res.data.data
						console.log('this.csListArr3',this.csListArr3)
					})
				}else{
					console.log('没有')
				}
			},
			stopTouchMove() {
				return false
			},
		}
	}
</script>

<style>
	.main {
		width: 100%;
		height: auto;
		margin: 20px auto;
		overflow: hidden
	}

	.order-item {
		width: 100%;
		display: flex;
		position: relative;
		margin: 0px auto;
		align-items: right;
		flex-direction: row;
		background: white;
	}

	.content {
		width: 110%;
		height: 100px;
		margin: 0 auto;
		border: 1px solid #C0C0C0;
		line-height: 100px;
		text-align: center;
		
	}

	.list_every {
		margin-top: 30upx;
	}

	.listall {
		margin-top: 15px;
	}

	.list {
		height: 150upx;
	}

	.rightInfo {
		margin-left: 260px;
		margin-top: 27px;
		position: absolute;
	}

	.my {
		font-size: 40upx;
		margin-left: 30upx;
		margin-top: -60upx;
		position: absolute;
	}

	.ct_tab {
		width: 100%;
		height: 80rpx;
		margin: 0 auto;
		/* padding: 30upx 0; */
		font-size: 26upx;
		font-weight: bold;
		color: #c0c8d0;
		white-space: nowrap;
		display: flex;
		margin-top: 65px;
		background-color: white;
		overflow: hidden;
	}

	.ct_item {
		width: 150upx;
		padding: 0upx 10upx;
		margin-left: 40px;
		color: black;
		margin-top: 20upx;
		font-size: 25upx;
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
		width: 150upx !important;
	}

	/* 徽标 */
	.u-badge[data-v-662d25bf] {
		border-top-right-radius: 100px;
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		display: flex;
		flex-direction: row;
		width: 10px;
		line-height: 11px;
		text-align: center;
		font-size: 11px;
		color: #FFFFFF;
		position: absolute;
		left: 270px;
		top: 55px;
	}

	.u-badge--not-dot[data-v-662d25bf] {
		padding: 2px 5px;
	}

	.u-badge--error[data-v-662d25bf] {
		background-color: #f56c6c;
	}
</style>

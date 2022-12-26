<template>
	<view>
		<view>
			<img src="static/nav/leftarrow.png" style="width: 20px;margin-left: 10px;
			margin-top: 40px;" alt="" @click="back()">
			<view class="monitor-title">监控</view>
			<view class="research-center">
				<img src="static/nav/checkbox.png" class="checkbox" alt="" @click="movetitle()">
				<view class="multiselect">多选</view>
				<view style="width: 320px;height: 25px;background:#F4F6F9;margin-left: 40px;
			margin-top: 12px;border-radius: 10px;position: absolute;">
					<input type="text" placeholder="请输入标题" style="width: 240px;
			margin-top: 2px;position:absolute;margin-left: 13px;background-color: #F4F6F9;
			font-size: 15px;">
					<img src="static/home/search.png" style="width: 36rpx;float: right;margin-right: 10px;
			margin-top:4px;"></image>
				</view>
				<view style="float: right;margin-top: 5px;margin-right:10px">
					<img src="static/home/filter.png" style="width: 20px;" alt="" @click="publish()">
					<view style="font-size: 10px;color:#A9AAB0;margin-top: -8px;">{{issue}}</view>
				</view>
			</view>
		</view>
		<view class="expand"></view>
		<view class="list-center" v-for="(item,index) in csListArr1" :key="index" :data-index="index"
			:style="'right:'+item.right+'px'" @click="gotoDeatails(item)">
			<view class="content">
				<!-- <radio class="leftselect" :style="{display:display}" @click="selectAll()"></radio> -->
				<view class="move" :style={marginLeft:marginLeft}>
					<img :src=item.url style="20px;float: left;margin-top: 20px;
			margin-left:20px" alt="">
					<view style="margin-top:-20px;margin-left: 90px;position: absolute;">{{item.title}}</view>
					<view style="margin-top:10px;margin-left: 90px;position: absolute;color: #BEBFC3;">{{item.date}}
					</view>
				</view>
				<view style="margin-top:-25px;margin-left: 280px;position: absolute;color: #BEBFC3;">{{item.person}}
				</view>
				<view v-bind:style="{marginTop:'9px',marginLeft: '280px',position:'absolute',color:item.color}">{{item.info}}
				</view>
			
		</view>
		</view>
		<view>
			<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange"
				:style="{marginTop: '-1021px',position:'absolute',display:display}">
				<u-checkbox style="width: 50px;height: 50px;margin-left:10px;height: 102px;"
					v-for="(item, index) in csListArr1" :key="index" :disabled="item.disabled" shape="circle"
					iconSize="30px" size="25px" :label="item.name" :name="item.name" labelSize="0px" :checked="item.checked"
					>
				</u-checkbox>
			</u-checkbox-group>
		</view>
		<u-popup :show="show" @close="close()" @open="open()" :round="10" mode="bottom" :overlay=false>
			<view class="pop">
				<u-checkbox-group name="allCheck" @change="changeAll()">
					<u-checkbox :customStyle="{marginBottom: '8px'}" shape="circle" size="20px" class="getall">
					</u-checkbox>
				</u-checkbox-group>
				<text style="left:12px;">全选</text>
				<button class="pop-btn" @click="movetitle()">重试失败项目</button>
			</view>
		</u-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				selectEvery: [],
				show: false,
				title: "编目",
				issue: "发布",
				screen: "筛选",
				display: "none",
				select: true,
				
				marginLeft:"0px",
				checkboxValue1: [],
				checkLength: 0,
				allCheck: {
					name: '全选',
					values: 'all',
					checked: true
				},
				checkboxValue2: [],
				csListArr1: [{
					id:1,
					name: '小A',
					age: '18',
					right: 0,
					url: "static/home/1.png",
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}, {
					id:2,
					name: '小1',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码失败",
					disabled: false,
					checked: false
				}, {
					id:3,
					name: '小A2',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码成功",
					disabled: false,
					checked: false
				}, {
					id:4,
					name: '小A3',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}, {
					id:5,
					name: '小A4',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码失败",
					disabled: false,
					checked: false
				}, {
					id:6,
					name: '小A5',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}, {
					id:7,
					name: '小A6',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}, {
					id:8,
					name: '小A7',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}, {
					id:9,
					name: '小A8',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码失败",
					disabled: false,
					checked: false
				}, {
					id:10,
					name: '小A9',
					age: '18',
					right: 0,
					url: 'static/home/1.png',
					title: '习近平主席视察数博视',
					date: '2022-03-21  10:00:00',
					person: "张大爷",
					info: "转码中",
					disabled: false,
					checked: false
				}]
			}
		},
		onReady() {
			console.log('jfiejfie')
			this.$set(this.csListArr1,"color","green");
		for(var i=0;i<this.csListArr1.length;i++){
			if(this.csListArr1[i].info=="转码中"){
				this.csListArr1[i].color = "yellow";
			}else if(this.csListArr1[i].info=="转码失败"){
				this.csListArr1[i].color = "red"
			}else{
				this.csListArr1[i].color = "#A5ECB1"
			}
		}
		},
		methods: {
			publish(){
				console.log('非甲烷我按键覅积分积分')
				uni.navigateTo({
					url:'/pages/publish/publish',
				});
			},
			gotoDeatails(data){
				console.log('1231111111111',data)
				uni.navigateTo({
					url:'/pages/detailsOfMonitor/detailsOfMonitor?data='+encodeURIComponent(JSON.stringify(data)),
				});
			},
			back() {
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			open() {
				console.log('huangzhilong')
			},
			close() {
				this.show = false;
			},
			/* 全选 */
			changeAll(e, data) {
				console.log('1111')
				if (this.checkLength == this.csListArr1.length) {
					this.csListArr1.forEach(function(item, index) {
						item.checked = false;
					})
					this.checkLength = 0;
				} else {
					let getAll = this.allCheck.checked;
					this.csListArr1.forEach(function(item, index) {
						if(getAll){
							item.checked = true;
						}else{
							item.checked=false;
						}
					})
					this.checkLength = this.csListArr1.length;
				}
			},

			checkboxChange(n) {
				console.log('this', this.csListArr1)
				console.log('change', n);
				this.checkLength = n.length;
			},
			movetitle(e) {
				for (var i = 0; i < this.csListArr1.length; i++) {
					if (this.select) {
						this.marginLeft = "30px";
						this.display = "block"
					} else {
						this.marginLeft = "0px";
						this.display = "none"
					}
					// console.log('fewafwef',this.csListArr1[i])
					// this.$set(this.csListArr1[i], "disabled", false);
					// this.$set(this.csListArr1[i], "checked", false);
				}
				this.show = !this.show
				this.select = !this.select;
			},
		}
	}
</script>

<style>
	.expand{
		width: 100%;
		height: 20px;
	}
	.list-center{
		/* margin-top: 10px; */
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
		font-size: 12px;
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

	.research-center {
		width: 100%;
		height: 50px;
		background: white;
	}

	.monitor-title {
		width: 50px;
		font-size: 20px;
		height: 25px;
		margin-top: -29px;
		position: absolute;
		margin-left: 35px;
	}

	.order-item {
		width: 100%;
		display: flex;
		position: relative;
		margin: 0px auto;
		align-items: right;
		flex-direction: row;
		
	}

	.content {
		width: 110%;
		height: 100px;
		margin: 0 auto;
		border: 1px solid #C0C0C0;
		line-height: 100px;
		text-align: center;
		background: white;
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
</style>

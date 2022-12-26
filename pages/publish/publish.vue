<template>
	<view>
		<view class="top">
			<view style="width: 320px;height: 25px;background:#F4F6F9;margin-left: 40px;
		margin-top: 12px;border-radius: 10px;position: absolute;">
				<input type="text" placeholder="请输入标题" style="width: 240px;
		margin-top: 2px;position:absolute;margin-left: 13px;background-color: #F4F6F9;
		font-size: 15px;">
				<img src="static/home/search.png" style="width: 36rpx;float: right;margin-right: 10px;
		margin-top:4px;"></image>
			</view>
			<view style="float: right;margin-top: 5px;margin-right:10px" @click="bottomSelect()"">
				<img src=" static/home/filter.png" style="width: 20px;" alt="">
				<view style="font-size: 10px;color:#A9AAB0;margin-top: -8px;">{{issue}}</view>
			</view>
		</view>
		<!-- 列表 -->
		<view :style={display:display1}>
		<view class="list-center" v-for="(item,index) in csListArr1" :key="index" :data-index="index"
			:style="'right:'+item.right+'px'">
			<view class="content">
				<view class="move" style="margin-left: 20px;">
					<img :src=item.url style="float: left;margin-top: 20px;
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
				:style="{marginTop: '-1025px',position:'absolute',display:display2}">
				<u-checkbox style="width: 50px;height: 50px;margin-left:10px;height: 102px;"
					v-for="(item, index) in csListArr1" :key="index" :disabled="item.disabled" shape="circle"
					iconSize="30px" size="25px" :label="item.name" :name="item.name" labelSize="0px" :checked="item.checked"
					>
				</u-checkbox>
			</u-checkbox-group>
		</view>
		<u-popup :show="true" @close="close()" @open="open()" :round="10" mode="bottom" :overlay=false>
			<view class="pop">
				<u-checkbox-group name="allCheck" @change="changeAll()">
					<u-checkbox :customStyle="{marginBottom: '8px'}" shape="circle" size="20px" class="getall">
					</u-checkbox>
				</u-checkbox-group>
				<text style="left:12px;">全选</text>
				<button class="pop-btn">发布到</button>
			</view>
		</u-popup>
		</view>
		<!-- 列表 -->
		<view :style="{display:display}">
		<view class="line"></view>
		<view class="line-word">请查询后进行发布</view>
		<view class="line" style="margin-left: 272px;margin-top: -11px;"></view>
		</view>
		<u-popup :show="show" :round="10" mode="top" @close="close" @open="open">
			<view class="selectbottom">
				<view>模糊查询</view>
				<u-input placeholder="请输入内容" border="surround" v-model="value" @change="change"
					style="background: #F2F3F3;width: 85%;height: 20px;line-height: 20px;"></u-input>
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
				<button class="confirm" @click="confirm2()">确定</button>
				<button class="cancel" @click="cancel()">取消</button>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				issue: "筛选",
				show: false,
				show1: false,
				show2: false,
				show3:false,
				mode: 'single',
				checkboxValue1: [],
				checkLength: 0,
				value: '',
				value1: '',
				value2: '',
				value3: 0,
				display:"block",
				display1:"none",
				display2:'none',
				allCheck: {
					name: '全选',
					values: 'all',
					checked: true
				},
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
		methods: {
			open() {

			},
	
			checkboxChange(n) {
				console.log('this', this.csListArr1)
				console.log('change', n);
				this.checkLength = n.length;
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
			confirm2(){
				this.show = false
				this.display="none"
				this.show2 = true
				this.display1 = "block"
				this.display2="block"
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

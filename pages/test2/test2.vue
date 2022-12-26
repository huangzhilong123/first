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
			<button class="confirm" @click="confirm2()">确定</button>
			<button class="cancel" @click="cancel()">取消</button>
		</view>
	</u-popup>
</template>

<script>
	export default {
		data() {
			return {
				issue: "筛选",
				show: true,
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
<style>
</style>
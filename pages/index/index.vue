<template>
	<view class="container">
		<view class="title">管理系统</view>
		<text class="titlebelow">登录</text>
		<view class="account">账号</view>
		<view id="accountin">
			<input class="accountin" v-model="loginParams.loginId" type="text" maxlength="11" name="mobile"
				placeholder="请输入你的账号">
		</view>
		<view class="password">密码</view>
		<view id="passwordin">
			<input class="passwordin" @input="onInput" :type="showPassword?'text':'password'"
				:value="loginParams.password" placeholder="请输入你的密码">
			<image :src="showPassword?'/static/login/open.png':'/static/login/close.png'" class="pwd" @click="showPwd">
			</image>
		</view>
		<view class="remember-psw">
			<checkbox-group @change="checkboxChange">
				<checkbox id="chkRem" type="checkbox" :checked='rememberPsw' @tap="rememberPsw =! rememberPsw"
					color="#09CC86" />
				记住账号密码
			</checkbox-group>
		</view>

		<button class="login" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				inputType: "password",
				rememberPsw: true,
				loginParams: {
					loginId: '',
					password: ''
				}
			}
		},
		mounted() {
			//记住密码
			const HBusername = uni.getStorageSync('HBusername');
			const HBpassword = uni.getStorageSync("HBpassword");
			console.log("缓存的账号：" + HBusername);
			console.log("缓存的密码：" + HBpassword);
			if (HBusername && HBpassword) {
				this.loginParams.loginId= HBusername;
				this.loginParams.password = HBpassword;
			} else {
				this.loginParams.loginId = '';
				this.loginParams.password = '';
			}
		},
		methods: {
			showPwd(e) {
				this.showPassword = !this.showPassword;
			},
			onInput(e) {
				this.loginParams.password = e.target.value;
			},
			login() {
				uni.request({
					url: 'http://172.22.22.3:9000/api/authorize/login',
					method: "POST",
					data: this.loginParams,
					timeout:10000,
					header: {
						
					},
					success: (res) => {
						if (res.statusCode == 200) {
							//勾选就缓存账号和密码
							console.log('123')
							console.log('huang',this.loginParams)
							if (this.rememberPsw) {
								uni.setStorageSync('HBusername', this.loginParams.loginId);
								uni.setStorageSync('HBpassword', this.loginParams.password);
							} else { //销毁缓存
								uni.removeStorageSync('HBusername');
								uni.removeStorageSync('HBpassword');
							}
							console.log('res',res);
							uni.switchTab({
								url: '/pages/home/home'
							})
						}
						uni.setStorageSync("token",res.data.data.token);
						uni.setStorageSync("authPrefix",res.data.data.authPrefix);
					},
					fail:(res)=>{

					}
				})
			},
			//复选框
			checkboxChange: function(e) {
				console.log("复选框状态:" + e.detail.value.length);
				if (e.detail.value.length == 1) {
					//获取缓存的账号 赋值
					uni.getStorageSync('HBusername', this.loginParams.loginId);
					uni.getStorageSync('HBpassword', this.loginParams.password);
				} else { //销毁
					uni.removeStorageSync('HBusername');
					uni.removeStorageSync('HBpassword');
				}
			},

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background: white;
		height: 580px;
	}

	.title {
		margin-left: 20px;
		margin-top: 30px;
		font-size: 18px;
	}

	.titlebelow {
		font-size: 24px;
		margin-left: 20px;
	}

	.account {
		opacity: 0.6;
		margin-left: 20px;
		margin-top: 40px;
	}

	#accountin {
		background: #EAEAEA;
		height: 40px;
		border-radius: 10px;
		line-height: 40px;
		margin-left: 20px;
		margin-top: 10px;
	}

	.accountin {
		margin-left: 20px;
		margin-top: 10px;
		position: absolute;
	}

	.password {
		opacity: 0.6;
		margin-left: 20px;
		margin-top: 40px;
	}

	#passwordin {
		background: #EAEAEA;
		height: 40px;
		border-radius: 10px;
		line-height: 40px;
		margin-left: 20px;
		margin-top: 10px;
	}

	.passwordin {
		margin-left: 20px;
		margin-top: 10px;
		position: absolute;
	}

	.login {
		background: #409EFF;
		width: 300px;
		margin-left: 20px;
		margin-top: 60px;
		border-radius: 10px;
	}

	.pwd {
		width: 20px;
		height: 20px;
		background-color: #EAEAEA;

		float: right;
		right: 20px;
		top: 10px;
	}

	.remember-psw {
		margin-top: 10px;
		margin-left: 20px;
	}
</style>

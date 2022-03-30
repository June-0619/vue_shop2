<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 头像区 -->
			<!-- 登录组件头部布局 -->
			<div class="avatar_box">
				<img src="../assets/logo.png" alt="">
			</div>
			<!-- 登录表单区 -->
			<el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
				<!-- 用户名 -->
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
					<!-- prefix-icon 表前置图标的意思 后面的属性从fonticon文件中复制 -->
				</el-form-item>
				<!-- 密码-->
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password">
					</el-input><!-- type="password"表示是密码类型的输入 -->
				</el-form-item>
				<!-- 按钮区域-->
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="resetLoginForm">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//登录表单的数据绑定对象
				loginForm: {
					username: 'admin',
					password: '123456'
				},
				//表单验证规则对象
				loginFormRules: {
					username: [{
							required: true,
							message: '请输入登录名称',
							trigger: 'blur'
						}, //trigger: 'blur'鼠标点击然后再失去焦点后生效
						{
							min: 3,
							max: 10,
							message: '长度在 3 到 10 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入登录密码',
							trigger: 'blur'
						}, //trigger: 'blur'鼠标点击然后再失去焦点后生效
						{
							min: 6,
							max: 15,
							message: '长度在 6 到 15 个字符',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			//点击重置按钮重置登陆表单
			resetLoginForm() {
				// console.log(this)
				//this.$refs.loginFormRef调用表单对象
				this.$refs.loginFormRef.resetFields();
			},
			login() {
				this.$refs.loginFormRef.validate(async (valid) => { //validate接收了一个回调函数，返回一个布尔值，valid为形参,即该布尔值
					// console.log(valid);
					if (!valid) return;
					const {
						data: res
					} = await this.$http.post('login', this
						.loginForm); //loginForm是登录表单的数据对象，{data:res}提取data数据，重命名为res
					if (res.meta.status !== 200) return this.$message.error('登录失败');
					this.$message.success('登录成功');
					// console.log(res);
					//把toke保存到sessionStorage中
					window.sessionStorage.setItem('token', res.data.token);
					//通过编程式导航跳转到后台主页，路由地址是/home
					this.$router.push('/home');
				});
			}
		}
	};
</script>

<!-- scoped使得样式只在该组件生效，而不是全局生效 -->
<style lang="less" scoped>
	.login_container {
		background-color: #2b4b6b;
		height: 100%;
	}

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		/* 圆角 */
		position: absolute;
		/* 绝对定位 */
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.avatar_box {
		height: 130px;
		width: 130px;
		border: 1px solid #eee;
		/* 加边框 */
		border-radius: 50%;
		padding: 10px;
		/* 使得盒子边框和里面的图片有一些间距 */
		box-shadow: 0 0 10px #ddd;
		position: absolute;
		left: 50%;
		/* 定位盒子位置 */
		transform: translate(-50%, -50%);
		/* translate相对盒子本身位置进行平移 前面是水平 后面是垂直 */
		background-color: #fff;

		img {
			width: 100%;
			/* 使之占满父盒子的宽度 */
			height: 100%;
			border-radius: 50%;
			background-color: #eee;
		}
	}

	.login_form {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0 10px;
		/* 内边距 */
		box-sizing: border-box;
	}

	.btns {
		display: flex;
		justify-content: flex-end;
		/* 居右对齐 */
	}
</style>

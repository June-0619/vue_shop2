import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)

const router=new Router({
  routes: [
	  /* 将根路径重定向到登录页面*/
	{ path:'/', redirect: '/login'},
    { path:'/login', component: Login},
	{ path:'/home', component: Home},
  ]
})
//挂载路由导航守卫
router.beforeEach((to,from,next)=>{//回调函数
	//to将要访问的路径
	//from代表从哪个路径跳转而来
	//next是一个函数 表示直接放行
	
	//如果当前路径为登录页面
	if(to.path==='/login')return next();
	//获取token
	const tokenStr=window.sessionStorage.getItem('token');
	//如果token为空，跳转回登录页面
	if(!tokenStr) return next('/login');
	next();
	
})

export default router
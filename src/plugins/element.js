import Vue from 'vue'
import { Button,Form,FormItem,Input,Message } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message=Message//Message需要全局挂载-挂载在vue的原型对象上

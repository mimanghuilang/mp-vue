import Vue from 'vue'
import App from './App'

// 引入样式文件
import '../static/css/app.css'

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue(App);

app.$mount();

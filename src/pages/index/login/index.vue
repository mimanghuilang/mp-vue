<template>
  <div class="login-content">
    <div class="company-logo">
      <img class="image" src="" alt="企业logo">
    </div>
    <div class="login-box">
      <div class="phone-box">
        <input type="text" class="phone-input">
      </div>
      <div class="password-box">
        <input type="password" class="password-input">
        <button>获取验证码</button>
      </div>
      <div class="button-box">
        <Button>登录</Button>
      </div>

    </div>


  </div>
</template>

<script>
  import { formatTime } from '@/utils/index';
  import card from '@/components/card';

  console.log(formatTime);
  export default {
    components: {
      card
    },

    data () {
      return {};
    },

    created () {
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login-content {
    position: fixed;
    width: 100%;
    height: 100%;
    .company-logo {
      width: 100%;
      height: 200rpx;
      text-align: center;
      margin-top: 100rpx;
      .image{
        width: 200rpx;
        height: 200rpx;
        background-color: green;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
  }

</style>

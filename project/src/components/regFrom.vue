<template>
  <div class="login-from">
  	<div class="g-from">

  	  <div class="g-from-line">
  	  	<span class="g-from-label">用户名：</span>
  	  	<div class="g-from-input">
  	  	  <input type="text" v-model="usernameModel" placeholder="请输入用户名"><span class="g-from-error">{{ userErrors.errorText }}</span>
  	  	</div>
  	  </div>

  	  <div class="g-from-line">
        <span class="g-from-label">密码：</span>
        <div class="g-from-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码"><span class="g-from-error">{{ passwordErrors.errorText }}</span>
        </div>
  	  </div>
  	  <div class="g-from-line">
  	  	<div class="g-from-button">
  	  	  <a class="button" @click="onLogin">登录</a>
  	  	</div>
        <p class="errorText">{{ errorText }}</p>
  	  </div>
      
  	</div>
  </div>
</template>
<script>
  export default {
    /*props: {
      onSuccesslog: {
        usernameModel,
        passwordModel
      }
    },*/
  	data () {
  	  return {
  	  	usernameModel: '',
  	  	passwordModel: '',
        errorText: ''
  	  }
  	},
    computed: {
      userErrors () {
        let errorText, status
        if (this.usernameModel ==='' || this.passwordModel === ''){
          status = false
          errorText = '请填写完整的信息'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{6}$/g.test(this.passwordModel)){
          status = false
          errorText = '密码不是6位,请重新输入'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '信息填写未通过！'
        }
        else {
          this.errorText = ''
          this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-reg', res.data)
        },(error) => {
          console.log(error)            
        })
        } 
        
      }
  }
}
</script>
<style>
  
</style>
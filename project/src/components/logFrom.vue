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
  	    <span class="g-from-label">E-mail：</span>
  	    <div class="g-from-input">
  	  	  <input type="email" v-model="emailModel" placeholder="请输入你的电子邮件">
  	  	</div><span class="g-from-error">{{ eamilErrors.errorText }}</span>
  	  </div>

  	  <div class="g-from-line">
  	    <span class="g-from-label">电话号码：</span>
  	    <div class="g-from-input">
  	  	  <input type="text" v-model="telephoneModel" placeholder="请输入你的电话号码"><span class="g-from-error">{{ telephoneErrors.errorText }}</span>
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
  	  	  <a class="button" @click="register">注册</a>
  	  	</div>
  	  	<p class="errorText">{{ errorText }}</p>
  	  </div>

    </div>
  </div>
</template>
<script> 
  export default {
  	data () {
  	  return {
  	  	usernameModel: '',
  	    emailModel: '',
  	    telephoneModel: '',
  	    passwordModel: '',
  	    errorText: ''
  	  }
  	},
  	computed: {
      userErrors () {
        let errorText, status
        if (this.usernameModel ==='' || this.passwordModel === ''){
          status = false
          errorText = '不能为空'
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
      telephoneErrors () {
      	let errorText, status 
      	if (!/^\d{11}$/g.test(this.telephoneModel)) {
          status = false
          errorText = '请输入11位为数字的电话号码!'
      	}
      	else {
      	  status = true
      	  errorText = ''
      	}
      	if (!this.telephoneFlag) {
          errorText = ''
          this.telephoneFlag = true
      	}
      	return {
      	  status,
      	  errorText
      	}
      },
      eamilErrors () {
      	let errorText, status
      	if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(this.eamilModel)) {
      	  status = false
      	  errorText = '请填写正确的格式'
      	}
      	else {
          status = true
      	  errorText = ''
      	}
      	if (!this.eamilFlag) {
          errorText = ''
          this.eamilFlag = true
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
      register () {
        if (!this.userErrors.status || !this.passwordErrors.status || !this.telephoneErrors.status) {
          this.errorText = '信息填写未通过！'
        }
        else {
          this.errorText = ''
          /*this.$http.get('api/login')
          .then((res) => {
          this.$emit('has-reg', res.data)
        },(error) => {
          console.log(error)            
        })
        this.$emit('has-log')*/
          alert('注册成功')
      }
    }
   }
  }
</script>
<style>
	
</style>
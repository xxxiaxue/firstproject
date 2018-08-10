<template>
  <div>
    <div class="zong">
      <div class="app-header">
        <ul class="header-title">
          <li class="username">{{ username }}</li>
          
          <li @click="registerClick">登录</li>
          <li>｜</li>
          <li @click="logisterClick">注册</li>
          <li>｜</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
      <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    <div class="app-footer">@ 2016 fishenal MIT</div>
    <my-dialog :is-show="isShowaboutDialog" @on-close="closeClick('isShowaboutDialog')">
      <p>依托自身完善的服务体系，强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力，在短短的时间里，迅速成长为业内领先的知名企业，是网络信息化技术产业的高新科技企业。我们注重客户提出的每个要求，我们充分考虑您的每一个细节，我们积极的做好服务，我们努力开拓更好的视野，通过不懈的努力，我们赢得了业内的良好声誉，这一切，也不断的激励着我们更好的服务客户。我们对网络产品质量提出了严格要求，确保用户能够获得优秀的网站设计服务。同时也证明您所使用的产品具有出色的品质及完善的售后服务。“创新”是的生存之本，“诚信”是红悦网络的一贯宗旨。优质服务、塑造互联网领域的品牌是我们的前进目标。热诚希望与您的真诚合作能够获得成功!
      </p>
    </my-dialog>

    <my-dialog :is-show="isShowregDialog" @on-close="closeClick('isShowregDialog')">
      <reg-from @has-reg="onSuccessreg"></reg-from>
    </my-dialog>

    <my-dialog :is-show="isShowlogDialog" @on-close="closeClick('isShowlogDialog')">
      <log-from @has-log="onSuccesslog"></log-from>
    </my-dialog>
    </div>
   
  </div>
</template>

<script>
import Dialog from './dialog'
import RegFrom from './regFrom'
import LogFrom from './logFrom'
  export default {
    components: {
      myDialog: Dialog,
      RegFrom,
      LogFrom
    },
    data () {
      return {
        isShowaboutDialog: false,
        isShowregDialog: false,
        isShowlogDialog: false,
        username: ''
      }
    },
    methods: {
      aboutClick () {
        this.isShowaboutDialog = true
      },
      registerClick () {
        this.isShowregDialog = true
      },
      logisterClick () {
        this.isShowlogDialog = true
      },
      closeClick (atr) {
        this[atr] = false
      },
      /*closeRegClick () {
        this.isShowregDialog = false
      },*/
      onSuccessreg (data) {
        console.log(data)
        this.username = data.username  
      },
      onSuccesslog (val) {
        
      }
    }
  }
</script>
<style>
  ul,*,body {
    list-style: none;
    padding: 0;margin: 0;
  }
  .zong{
    background: #dcdcdc;
  }
  .app-header{
    width: 100%;
    height: 60px;
    background-color: black;
    margin-bottom: 20px;
  }
  
  .header-title{
    color: #fff;
    float: right;
    line-height: 60px;
    font-size: 12px;
  }
  .header-title li {
    float: left;
    cursor: pointer;
    padding-right: 15px;
  }
  .app-footer{
    text-align: center;
    background: gray;
  }
  .g-from {
    
    border: 3px solid #fff;
    box-shadow: 0 0 3px #fff;
  }
  .g-from-line {
    
    padding: 18px 0;
  }
  .g-from-label {
    font-family: '微软雅黑';
    width: 90px;
    height: 30px;
    font-size: 16px;
    display: block; 
    float: left;
  }
  .g-from-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    padding: 0 10px;
  }
  .g-from-button {
    width: 70px;
    height: 25px;
    background: #4fc08d;
    display: block;
    text-align: center;
    cursor: pointer;
    margin-left: 90px;
    color: #fff;
    border-radius: 5px;
  }
  .g-from-error {
    padding-left: 15px;
    font-size: 12px;
    color: red; 
  }
  .errorText {
    color: red;
    font-size: 12px;
    padding-top: 15px;
  }
  .username {
    color: #fff;
  }
  
</style>
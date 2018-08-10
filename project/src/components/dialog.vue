<template>
  <div>
    <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover"></div>
      <div class="dialog-content">
        <p class="dialog-close" @click="closeMyself">x</p>
        <slot>hello</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        
      }
    },
    methods: {
      closeMyself () {
        this.$emit("on-close")
      }
    }
  }
</script>
<style scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: 0.2;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 80%;
  margin: 0 auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 8px;
  top: 0px;
  font-size: 18px;
  cursor: pointer;

}
</style>
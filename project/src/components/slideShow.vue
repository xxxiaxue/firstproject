<template>
<div class="slide-show" @mouseout="runInv" @mouseover="clearInv"> 
  <div class="slide-img">
  	<a :href="slides[nowIndex].href">
  	  <img :src="slides[nowIndex].src">
  	</a>
  </div>
  <h2>{{ slides[nowIndex].title }}</h2>
  <ul class="slides-page">
  	<li @click="goto(prevIndex)" title="向左滑">&lt;</li>
  	<li v-for="(item,index) in slides" @click="goto(index)">
  	 <a>{{ index + 1 }}</a>
  	</li>
  	<li @click="goto(nextIndex)" title="向右滑">&gt;</li>
  </ul>
 </div>
</template>

<script>
export default {
  props: {
  	slides: {
  	  type: Array,
  	  default: []
  	},
  	inv: {
  	  type: Number,
  	  default: 2000
  	}
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  computed: {
    prevIndex () {
      if ( this.nowIndex === 0 ) {
      	return 3
      }
      else {
      	return this.nowIndex - 1
      }
    },
    nextIndex () {
      if ( this.nowIndex === 3 ) {
        return 0
      }
      else {
      	return this.nowIndex + 1
      }
    }
  },
  methods: {
  	goto (index) {
  	  //this.isShow = false
  	  //setTimeout(() => {
        //this.isShow = true
        this.nowIndex = index
  	  //}, 10)
  	},
  	runInv () {
      this.ivId = setInterval (() => {
        this.goto(this.nextIndex)
    }, this.inv)
   },
    clearInv () {
      clearInterval(this.ivId)
    }
  },
  mounted () {
  	this.runInv()
  }
}
/*<transition name="slide-trans">
  	  	<img v-if="isShow" :src="slides[nowIndex].src">
  	  </transition>
  	  <transition name="slide-trans-old">
  	  	<img v-if="!isShow" :src="slides[nowIndex].src">
  	  </transition> */
</script>

<style scoped>
*,ul {
  list-style: none;
}
/*.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}*/
.slide-show {
  position: relative;
  margin: 0 20px 20px 20px;
  width: 790px;
  height: 420px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  color: pink;
  bottom: -20px;
  padding-left: 13px;
  height: 30px;
}
.slides-page {
  position: absolute;
  right: 20px;
  bottom: -5px;
}
.slides-page li {
  float: left;
  line-height: 25px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  line-height: 30px;
}

.slides-page a {
  display: block;
  float: left;
  font-size: 15px;
  text-align:center;
  line-height: 30px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;

}
.slides-page a:hover {
  display: block;
  color: yellow;
  font-size: 25px;
}  
</style>